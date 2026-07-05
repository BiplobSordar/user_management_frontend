pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t user-management-frontend:v1 .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker rm -f frontend-app || true

                    docker run -d \
                      --name frontend-app \
                      --restart unless-stopped \
                      -p 80:80 \
                      user-management-frontend:v1
                '''
            }
        }

    }
}
