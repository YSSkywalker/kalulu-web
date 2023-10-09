import React, { Component } from 'react';
import './PhotoBookInventoryTable.css';

class PhotoBookInventoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryData: [],
            isLoading: true,
            currentDate: new Date(), // currentDateをstateに追加
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
                    currentDate: new Date(), // ここでcurrentDateを更新
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    // formatDateをクラスのメソッドとして移動
    formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${year}年${month}月${day}日 ${hours}時${minutes}分 現在`;
    }

    render() {
        const { inventoryData, isLoading, currentDate } = this.state;

        if (isLoading) {
            return (
                <div className='photo-book-inventory'>
                    <h1 className='text-center'>La Prima Stella</h1>
                    <h3 className='text-center'>管理表</h3>
                    <p className='text-center'>Loading...</p>
                    <table className='photo-book-table'>
                        <thead>
                            <tr>
                                <th>商品名</th>
                                <th>値段</th>
                                <th>在庫数</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            );
        }

        return (
            <div className='photo-book-inventory'>
                <h1 className='text-center'>La Prima Stella</h1>
                <h3 className='text-center'>管理表</h3>
                <p className='text-center'>{this.formatDate(currentDate)}</p>
                <table className='photo-book-table'>
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
                                <td>{item['値段']} 円</td>
                                <td>
                                    {item['在庫数'] === 0 ?
                                        <span className='sold-out'>売り切れ</span> :
                                        `${item['在庫数']} 冊`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PhotoBookInventoryTable;
