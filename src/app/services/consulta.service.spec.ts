import { TestBed } from '@angular/core/testing';

import { ConsultaService } from './consulta.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConsultaService', () => {
  let service: ConsultaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultaService]
    })
    service = TestBed.get(ConsultaService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
      httpMock.verify();
  });

  it('should get a response with success', (done) => {
    let response = {
      "message": "success"
    }
    service.getConsulta('http://localhost:8080/status')
    const request = httpMock.expectOne( `http://localhost:8080/status`);
    setTimeout(() => {
      expect(service.historico[0].message).toContain('success')
      expect(service.historico[0].online).toBe(true)
      done()
    }, 1000)
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });
  it('should handle a response with error', (done) => {
    let response = {
      status: 400, statusText: 'Bad Request'
    }
    service.getConsulta('http://localhost:8080/error/400')
    const request = httpMock.expectOne( `http://localhost:8080/error/400`)
    setTimeout(() => {
      expect(service.historico[0].message).toContain('400')
      expect(service.historico[0].online).toBe(false)
      done()
    }, 1000)
    expect(request.request.method).toBe('GET');
    request.flush('Invalid Request', response);
  });
});
