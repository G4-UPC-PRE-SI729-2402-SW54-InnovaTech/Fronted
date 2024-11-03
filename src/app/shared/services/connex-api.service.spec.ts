import { TestBed } from '@angular/core/testing';
import {ConnexApiService} from "./connex-api.service";

describe('ConnexApiService', () => {
    let service: ConnexApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConnexApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
