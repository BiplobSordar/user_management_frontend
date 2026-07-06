pipeline {

    agent any

    options {
        timestamps()
    }

    environment {
        IMAGE_NAME = "frontend-app"
        CONTAINER_NAME = "frontend-container"
        HOST_PORT = "3000"
        CONTAINER_PORT = "80"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                echo "========================================"
                echo "Checking out source code..."
                echo "========================================"

                checkout scm
            }
        }

        stage('Repository Information') {
            steps {
                sh '''
                    echo ""
                    echo "========== Repository =========="
                    pwd
                    ls -lah
                '''
            }
        }

        stage('Verify Docker') {
            steps {
                sh '''
                    echo ""
                    echo "========== Docker Version =========="
                    docker --version

                    echo ""
                    echo "========== Docker Information =========="
                    docker info
                '''
            }
        }

        stage('Create Frontend Environment') {
            steps {

                script {

                    echo "Getting EC2 Public IP..."

                    def publicIP = sh(
                        script: '''
TOKEN=$(curl -X PUT http://169.254.169.254/latest/api/token \
-H "X-aws-ec2-metadata-token-ttl-seconds:21600" -s)

curl -H "X-aws-ec2-metadata-token:$TOKEN" \
-s http://169.254.169.254/latest/meta-data/public-ipv4
''',
                        returnStdout: true
                    ).trim()

                    env.PUBLIC_IP = publicIP
                    env.BACKEND_API = "http://${publicIP}:5000/api/v1"
                    env.FRONTEND_URL = "http://${publicIP}:3000"

                    sh """
cat > .env.production <<EOF
VITE_API_BASE_URL=${env.BACKEND_API}
EOF
"""

                    sh '''
                        echo ""
                        echo "========== Generated .env.production =========="
                        cat .env.production
                    '''
                }

            }
        }

        stage('Build Docker Image') {
            steps {

                sh '''
                    echo ""
                    echo "========== Building Docker Image =========="

                    docker build -t ${IMAGE_NAME} .

                    echo ""
                    echo "Docker Image Built Successfully."
                '''

            }
        }

        stage('Show Docker Images') {
            steps {

                sh '''
                    echo ""
                    echo "========== Docker Images =========="

                    docker images
                '''

            }
        }

        stage('Stop Existing Container') {
            steps {

                sh '''
                    echo ""
                    echo "========== Stop Existing Container =========="

                    if docker ps --format "{{.Names}}" | grep -w ${CONTAINER_NAME}; then
                        docker stop ${CONTAINER_NAME}
                    else
                        echo "No running container."
                    fi
                '''

            }
        }

        stage('Remove Existing Container') {
            steps {

                sh '''
                    echo ""
                    echo "========== Remove Existing Container =========="

                    if docker ps -a --format "{{.Names}}" | grep -w ${CONTAINER_NAME}; then
                        docker rm ${CONTAINER_NAME}
                    else
                        echo "No container to remove."
                    fi
                '''

            }
        }

        stage('Run Docker Container') {
            steps {

                sh '''
                    echo ""
                    echo "========== Starting Container =========="

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${HOST_PORT}:${CONTAINER_PORT} \
                        ${IMAGE_NAME}

                    echo ""
                    echo "Container Started Successfully."
                '''

            }
        }

        stage('Verify Deployment') {
            steps {

                sh '''
                    echo ""
                    echo "========== Running Containers =========="

                    docker ps

                    echo ""
                    echo "========== Container Logs =========="

                    docker logs ${CONTAINER_NAME} || true
                '''

            }
        }

        stage('Deployment Summary') {

            steps {

                echo ""
                echo "=========================================================="
                echo "Frontend Deployment Completed Successfully"
                echo "=========================================================="
                echo ""
                echo "Frontend URL"
                echo "${env.FRONTEND_URL}"
                echo ""
                echo "Backend API"
                echo "${env.BACKEND_API}"
                echo ""
                echo "Environment Variable"
                echo "VITE_API_BASE_URL=${env.BACKEND_API}"
                echo ""
                echo "Docker Image     : ${env.IMAGE_NAME}"
                echo "Container Name   : ${env.CONTAINER_NAME}"
                echo "Host Port        : ${env.HOST_PORT}"
                echo "Container Port   : ${env.CONTAINER_PORT}"
                echo ""
                echo "=========================================================="

            }

        }

    }

    post {

        success {

            echo "Frontend Pipeline Executed Successfully."

        }

        failure {

            echo "Frontend Pipeline Failed."

            sh '''
                echo ""
                echo "========== Docker Containers =========="
                docker ps -a || true

                echo ""
                echo "========== Docker Images =========="
                docker images || true
            '''

        }

        always {

            echo "Pipeline Finished."

        }

    }

}
