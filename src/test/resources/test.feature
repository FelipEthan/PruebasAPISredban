Feature: Consumo de API KYC

  Scenario: Realizar solicitud de validación KYC
    Given url baseUrl + '/rbmcalidad/calidad/api/kyc/v2.0.0/person'
    And request read('classpath:request.json')
    And header Content-Type = 'application/json'
    When method post
    Then status 200
    And match response == { "expectedResponse": "value" }
