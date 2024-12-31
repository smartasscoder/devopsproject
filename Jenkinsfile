pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/smartasscoder/devopsproject.git'
        BRANCH = 'main'
        DOCKER_REGISTRY = 'docker.io' 
        BACKEND_IMAGE = 'docker.io/eeman555/porfolio:latest'
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
                    echo "Building Docker image for Server..."
                        bat '''
                            docker build -t %BACKEND_IMAGE% .
                        '''
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    echo "Logging into Docker Hub and pushing Docker images..."
                    
                    // Use echo for secure password handling
                    bat """
                        echo eman12345 | docker login %DOCKER_REGISTRY% -u eeman555 --password-stdin
                        docker push %BACKEND_IMAGE%
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
                // Add deployment commands here
                bat 'echo Deploy step executed'
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
