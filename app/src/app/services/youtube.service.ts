import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class YoutubeService {
    private baseUrl = environment.urlService; // Asegúrate de que el backend esté corriendo

    constructor(private http: HttpClient) {}

    downloadMedia(url: string, format: string) {
        const body = { url, format };
        return this.http.post(`${this.baseUrl}/download`, body, {
            responseType: 'blob',
        });
    }
}
