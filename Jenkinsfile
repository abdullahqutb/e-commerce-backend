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

        stage('SonarQube analysis') {
            steps {
                script {
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectBaseDir=./ \
                        -Dsonar.host.url=http://ec2-18-133-28-219.eu-west-2.compute.amazonaws.com:9000 \
                        -Dsonar.login=48916dbcaaeda24e673087109127a172b272f884
                    '''
                }
            }
        }
    }
}
