import React, { useState, useEffect } from 'react';
import type { SelectProps } from 'antd/es/select';
import { AutoComplete } from 'antd';
import axios from 'axios';

const App: React.FC = () => {
    const [keywords, setKeywords] = useState<SelectProps<object>['options']>([
        {
            label: "中国银行",
            "id": 1
        },
        {
            label: "中国邮政",
            "id": 2
        },
        {
            label: "中国移动",
            "id": 3
        },
        {
            label: "上海天气",
            "id": 4
        },
        {
            label: "中国电信",
            "id": 5
        },
        {
            label: "上海市政府",
            "id": 6
        },
        {
            label: "上海人口",
            "id": 7
        },
        {
            label: "北京天气",
            "id": 8
        },
        {
            label: "北京时间",
            "id": 9
        },
        {
            label: "北京旅游攻略",
            "id": 10
        }
    ]);
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const searchResult = (query: string) => {
        const res: any[] = []
        keywords?.map((item: any) => {
            if (item.text.length > query.length && item.text.slice(0, query.length) === query) {
                res.push({ label: item.text, value: item.text });
            }
        })
        return res
    };

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    useEffect(() => {
        axios.get('/keywords.json').then((res) => { setKeywords(res.data) });
    }, [])

    return (
        <AutoComplete
            allowClear
            style={{ width: '100%' }}
            size='large'
            dropdownMatchSelectWidth={252}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        />
    )
}



export default App;