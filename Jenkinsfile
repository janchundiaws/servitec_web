pipeline{
    agent any
    stages{
        stage 'Build'{
            steps{
                echo 'etapa Build no disponible...'
            }
        }
        stage 'Test'{
            steps{
                echo 'etapa Test no disponible...'
            }
        }
         stage 'Deploy'{
            steps{
                sh 'echo Desplegando la aplicacion...'
                sh 'docker-compose down'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
                sh 'echo Aplicacion desplegada correctamente.'
            }
        }
    }

}