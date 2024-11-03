import { inject,Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class ConnexApiService {
    baseUrl = environment.baseUrl;

    private http: HttpClient= inject(HttpClient);

    // User Managment
    getUsers() {
        return this.http.get(this.baseUrl + '/users');
    }
    getUserById(id: string) {
        return this.http.get(this.baseUrl + '/users/' + id);
    }
    getUserByEmail(email: string) {
        return this.http.get(this.baseUrl + '/users/email/' + email);
    }
    editUser(id: string, userData: {
        email: string, password: string }) {
        return this.http.put(this.baseUrl + '/users/' + id, userData);
    }

    // Influencer Managment
    getInfluencers() {
        return this.http.get(this.baseUrl + '/influencers');
    }
    addInfluencer(influencerData: {
        email: string, password: string,
        firstName: string, lastName: string,
        phoneNumber: string, socialMediaHandle: string }) {
        return this.http.post(this.baseUrl + '/influencers', influencerData);
    }
    getInfluencerById(id: string) {
        return this.http.get(this.baseUrl + '/influencers/' + id);
    }
    updateInfluencer(id: string, influencerData: {
        email: string, password: string,
        firstName: string, lastName: string,
        phoneNumber: string, socialMediaHandle: string }) {
        return this.http.put(this.baseUrl + '/influencers/' + id, influencerData);
    }
    deleteInfluencer(id: string) {
        return this.http.delete(this.baseUrl + '/influencers/' + id);
    }

    // Company Managment
    getCompanies() {
        return this.http.get(this.baseUrl + '/companies');
    }
    addCompany(companyData: {
        email: string, password: string,
        name: string, industry: string,
        phoneNumber: string, website: string }) {
        return this.http.post(this.baseUrl + '/companies', companyData);
    }
    getCompanyById(id: string) {
        return this.http.get(this.baseUrl + '/companies/' + id);
    }
    updateCompany(id: string, companyData: {
        email: string, password: string,
        name: string, industry: string,
        phoneNumber: string, website: string }) {
        return this.http.put(this.baseUrl + '/companies/' + id, companyData);
    }
    deleteCompany(id: string) {
        return this.http.delete(this.baseUrl + '/companies/' + id);
    }

}