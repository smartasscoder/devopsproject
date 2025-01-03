pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/smartasscoder/devopsproject.git'
        BRANCH = 'main'
        DOCKER_REGISTRY = 'docker.io'
        BACKEND_IMAGE = 'eeman555/portfolio:latest'
        DOCKER_CREDENTIALS = credentials('dockerhub') // Replace 'dockerhub' with your credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo "Checking out repository from ${GIT_REPO}..."
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: "*/${BRANCH}"]],
                        extensions: [],
                        userRemoteConfigs: [[url: "${GIT_REPO}"]]
                    ])
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    echo "Building Docker image for the backend..."
                    bat """
                        docker build -t ${BACKEND_IMAGE} .
                    """
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo "Logging into Docker Hub and pushing the Docker image..."
                    bat """
                        echo ${DOCKER_CREDENTIALS_PSW} | docker login ${DOCKER_REGISTRY} -u ${DOCKER_CREDENTIALS_USR} --password-stdin
                        docker push ${BACKEND_IMAGE}
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
                bat 'echo Deploy step executed'
                // Add actual deployment commands here
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully."
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}
