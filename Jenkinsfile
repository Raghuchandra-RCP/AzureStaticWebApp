pipeline {
    agent any

    environment {
        AZURE_STATIC_WEB_APPS_API_TOKEN = credentials('azure-static-web-deploy-token') // Replace with your credentials ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }

        stage('Deploy to Azure Static Web Apps') {
            steps {
                echo 'Deploying to Azure Static Web Apps...'
                sh "npx swa deploy --app-location '/' --output-location 'build' --token ${env.AZURE_STATIC_WEB_APPS_API_TOKEN}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed. Please check the logs.'
        }
    }
}
