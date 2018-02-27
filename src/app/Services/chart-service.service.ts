import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ChartService {
    private mainData: Object = {
        "10th": {
            "total":"90",
            "marks": {
                "Hindi":65,
                "English":70,
                "Maths":55,
                "Science":60,
                "SST":70,
                "Sanskrit":70
            }
        },
        "12th": {
            "total":"98",
            "marks": {
                "Hindi":60,
                "English":70,
                "Phy":70,
                "Chem":80,
                "Maths":50
            }
        },
        "BCA": {
            "total":"85",
            "marks": {
                "subj1":65,
                "subj2":71,
                "subj3":55,
                "subj4":68,
                "subj5":70
            }
        },
        "MCA": {
            "total":"87",
            "marks": {
                "subj1":62,
                "subj2":74,
                "subj3":56,
                "subj4":61,
                "subj5":79
            }
        }
    }

    private data = [];
    
    constructor() {
        for(let data in this.mainData) {
            this.data.push([data, +this.mainData[data]['total']]) 
        }
        this.data.unshift(['Subject', 'Marks'])
    }

    getData() {        
        return this.data;
    }

    getSelectedChart(data) {
        this.data = [];
        var selectedData = this.mainData[data[0]]['marks']
        for(let sd in selectedData) {
            this.data.push([sd, selectedData[sd]])
        }
        this.data.unshift(['Subject', 'Marks'])
        return this.data;
    }
}