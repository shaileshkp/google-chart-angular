import { Subject } from '../Models/Subject';
import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ChartService {
    private classData: any[] = [
        ['Class', 'Percentage'],
        ['10th', 90],
        ['12th', 90],
        ['BCA',  86],
        ['MCA', 90]
    ]

    private subjectData: Object = 
    {
        "10th": {
            "subj1":65,
            "subj2":70,
            "subj3":55,
            "subj4":60,
            "subj5":70
        },
        "12th": {
            "subj1":60,
            "subj2":70,
            "subj3":70,
            "subj4":80,
            "subj5":50
        },
        "BCA": {
            "subj1":65,
            "subj2":71,
            "subj3":55,
            "subj4":68,
            "subj5":70
        },
        "MCA": {
            "subj1":62,
            "subj2":74,
            "subj3":56,
            "subj4":61,
            "subj5":79
        }
    }

    private data = this.classData;
    getData() {
        return this.data;
    }

    selectedChart(data) {
        this.data = [];
        var selectedData = this.subjectData[data[0]]
        for(let sd in selectedData) {
            this.data.push([sd, selectedData[sd]])
        }

        this.data.unshift(['Subject', 'Marks'])
    }
}