pipeline{
    agent any
    stages{
        stage ('Build'){
            steps{
                echo 'etapa Build no disponible...'
            }
        }
        stage ('Test'){
            steps{
                echo 'etapa Test no disponible...'
            }
        }
         stage ('Deploy'){
            steps{
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }
    }

}