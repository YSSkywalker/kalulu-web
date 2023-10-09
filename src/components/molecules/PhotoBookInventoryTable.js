import React, { Component } from 'react';
import './PhotoBookInventoryTable.css';

class PhotoBookInventoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryData: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        // エンドポイントURLを環境変数から取得
        const endpointUrl = process.env.REACT_APP_PHOTO_BOOK_INVENTORY_MANAGING_APP_ENDPOINT_URL;

        // GETリクエストを送信
        fetch(`${endpointUrl}?type=inventory`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    inventoryData: data.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { inventoryData, isLoading } = this.state;

        if (isLoading) {
            return (
                <div className='photo-book-inventory'>
                    <p>Loading...</p>
                </div>
            );
        }

        return (
            <div className='photo-book-inventory'>
                <table>
                    <thead>
                        <tr>
                            <th>商品名</th>
                            <th>値段</th>
                            <th>在庫数</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item, index) => (
                            <tr key={index}>
                                <td>{item['商品名']}</td>
                                <td>{item['値段']}</td>
                                <td>{item['在庫数']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PhotoBookInventoryTable;
