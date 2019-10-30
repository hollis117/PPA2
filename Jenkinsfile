pipeline {
  agent {
    docker {
      image 'node:7-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test (Normal)') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Test (Stubs)') {
      steps {
        sh 'npm run bmi-stub'
        sh 'npm run short-stub'
      }
    }
    stage('Test (Mocks)') {
      steps {
        sh 'npm run short-html'
        sh 'npm run bmi-html'
      }
    }
    stage('Deploy') {
      steps {
        sh 'node index.js'
      }
    }
  }
  environment {
    CI = 'true'
  }
}
