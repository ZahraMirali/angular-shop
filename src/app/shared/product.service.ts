import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private readonly http: HttpClient) {

    }

    createProduct(name, description, type, material, brand, size, marketPrice, salePrice, imageUrl, imageId) {
        return this.http.post('http://localhost:8090/product/create', {

            name,
            description,
            type,
            material,
            brand,
            size,
            marketPrice,
            salePrice,
            imageUrl,
            imageId,
        }).pipe(map((data) => {
            data => data['data']
        }))
    }

    getAllProducts() {

        return this.http.get('http://localhost:8090/product/get-all').pipe(map((data: GetAllProductResponseDto) => data.data))


    }

    getFilteredNames(value) {

        return this.http.get('http://localhost:8090/product/get-filtered-name/'+value).pipe(map((data: GetFilteredNameResponseDto) => data.data))


    }

    getFilteredBrands(value) {

        return this.http.get('http://localhost:8090/product/get-filtered-brand/'+value).pipe(map((data: GetFilteredNameResponseDto) => data.data))


    }

    applyImage(imageId, width, height, zerozero, xzero, zeroy, xy) {

        return this.http.post('http://localhost:8090/product/apply-image', {
            imageId, width, height, zerozero, xzero, zeroy, xy
        }).pipe(map((data: ApplyImageResponseDto) => data.data))

    }

}

class GetAllProductResponseDto {
    data: Product[]
}

class GetFilteredNameResponseDto {
    data: string[]
}
class ApplyImageResponseDto {
    data: string
}