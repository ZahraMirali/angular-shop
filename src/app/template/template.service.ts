import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Brand } from "../shared/brand.model";
import { Template } from "./template.model";

@Injectable()
export class TemplateService {

    templates: Template[] =       [
 
        new Template('1', 'One', '../../assets/1.jpg', 'this is my first template. this is my first template.',),
        new Template('2', 'Two', '../../assets/2.jpg', 'this is my first template. this is my first template.',),
        new Template('3', 'Three', '../../assets/3.jpg', 'this is my first template. this is my first template.',),
        new Template('4', 'Four', '../../assets/4.jpg', 'this is my first template. this is my first template.',),
        new Template('5', 'Five', '../../assets/5.jpg', 'this is my first template. this is my first template.',),
        new Template('6', 'Six', '../../assets/6.jpg', 'this is my first template. this is my first template.',),
        new Template('7', 'Seven', '../../assets/7.jpg', 'this is my first template. this is my first template.',),

    ]

    constructor(private readonly http: HttpClient) { }

    getTemplates() {
        return this.http.get('http://localhost:8090/template/get-all').pipe(map((responseData: GetTemplatesResponseDto) => {

            responseData.data = [...responseData.data,...this.templates]


            return responseData.data

        }))

    }
    getTemplate(id: string) {
        // return this.templates.find(item => item.id === id)
    }

    pingServer() {

        return this.http.get<GetDto>('http://localhost:8090/ping')
    }

    saveTemplate(psdFileMetadata,imageFileMetadata,imageUrl,name,description){

        return this.http.post('http://localhost:8090/template/save',{
            psdFileMetadata,
            imageFileMetadata,
            imageUrl,
            name,
            description
        }).pipe(map(data=>data['data']))
    }
}

export class GetDto {

    data: string
}

export class GetTemplatesResponseDto {

    data: Template[]
}