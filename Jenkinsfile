pipeline {

    agent any

    options {
        timestamps()
        ansiColor('xterm')
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

        stage('Build Docker Image') {
            steps {
                sh '''
                    echo ""
                    echo "========== Building Docker Image =========="

                    docker build -t frontend-app .

                    echo ""
                    echo "Docker image built successfully."
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
                    echo "========== Stopping Existing Container =========="

                    if docker ps --format '{{.Names}}' | grep -w frontend-container > /dev/null
                    then
                        docker stop frontend-container
                        echo "Container stopped."
                    else
                        echo "No running container found."
                    fi
                '''
            }
        }

        stage('Remove Existing Container') {
            steps {
                sh '''
                    echo ""
                    echo "========== Removing Existing Container =========="

                    if docker ps -a --format '{{.Names}}' | grep -w frontend-container > /dev/null
                    then
                        docker rm frontend-container
                        echo "Container removed."
                    else
                        echo "No existing container."
                    fi
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    echo ""
                    echo "========== Starting New Container =========="

                    docker run -d \
                        --name frontend-container \
                        -p 3000:80 \
                        frontend-app

                    echo ""
                    echo "Container started successfully."
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

                    docker logs frontend-container || true
                '''
            }
        }

        stage('Deployment Summary') {
            steps {
                sh '''
                    echo ""
                    echo "============================================"
                    echo "Deployment Completed Successfully"
                    echo "============================================"
                    echo "Image      : frontend-app"
                    echo "Container  : frontend-container"
                    echo "URL        : http://localhost:3000"
                    echo "============================================"
                '''
            }
        }
    }

    post {

        success {
            echo "Pipeline executed successfully."
        }

        failure {
            echo "Pipeline failed."

            sh '''
                echo ""
                echo "========== Docker Status =========="

                docker ps -a || true

                echo ""
                echo "========== Docker Images =========="

                docker images || true
            '''
        }

        always {
            echo "Pipeline execution finished."
        }
    }
}
