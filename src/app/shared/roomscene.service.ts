import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { Template } from "../template/template.model";
import { GetTemplatesResponseDto } from "../template/template.service";
import { Product } from "./product.model";

@Injectable({ providedIn: 'root' })
export class RoomsceneService {


    roomSceneProductChanged = new Subject<Product>()

    constructor(private readonly http: HttpClient) { }

    getPreview(psdId, imageId) {

        return this.http.get<{ data: string }>('http://localhost:8090/roomscene/preview', {
            params: {
                psdFileId: psdId,
                imageFileId: imageId
            }
        }).pipe(map(item => item.data))

    }

    getTemplate(id) {
        return this.http.get<{}>('http://localhost:8090/template/' + id).pipe(map((data: GetTemplateResponseDto) => data.data))
    }

    onRoomSceneProductChanged(product:Product){
        this.roomSceneProductChanged.next(product)
    }


}




export class GetTemplateResponseDto {
    data: Template
}