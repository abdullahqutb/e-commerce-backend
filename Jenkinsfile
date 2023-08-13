pipeline {
    agent any
    
    tools {
        nodejs 'Node 14'  // Use the name you provided in the Global Tool Configuration
    }


    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
