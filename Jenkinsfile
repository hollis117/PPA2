pipeline {
  agent {
    docker {
      image 'node:6-alpine'
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
        sh '''npm run bmi-stub
              npm run short-stub'''
      }
    }
    stage('Test (Mocks)') {
      steps {
        sh '''npm run bmi-html
              npm run short-html'''
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
