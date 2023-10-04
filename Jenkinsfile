pipeline {
    agent any
    
    tools {
        nodejs 'Node 14'
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

        stage('SonarQube analysis') {
            steps {
                script {
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectBaseDir=./ \
                        -Dsonar.host.url=http://ec2-18-133-28-219.eu-west-2.compute.amazonaws.com:9000 \
                        -Dsonar.login=f25cb86769f5efd68453ef989f259e9684280321
                    '''
                }
            }
        }
    }
}
