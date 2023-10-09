import React, { Component } from 'react';
import './RegisterPhotoBook.css';

class RegisterPhotoBook extends Component {
    state = {
        halleyStockNum: 0,
        dArrestStockNum: 0,
    };

    async componentDidMount() {
        await this.fetchData({ type: "inventory" });
    }

    async fetchData(params) {
        const endpoint = process.env.REACT_APP_PHOTO_BOOK_INVENTORY_MANAGING_APP_ENDPOINT_URL;
        const url = new URL(endpoint);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        const response = await fetch(url);
        const responseData = await response.json();

        // APIのレスポンスからdataキーを取得
        const data = responseData.data;

        data.forEach(item => {
            if (item["商品名"] === "Halley") {
                this.setState({ halleyStockNum: item["在庫数"] });
            } else if (item["商品名"] === "d'Arrest") {
                this.setState({ dArrestStockNum: item["在庫数"] });
            }
        });
    }


    handleButtonClick = (params) => {
        this.fetchData(params);
    }

    render() {
        return (
            <div className='register-photo-book'>
                <h1 className='photo-book-title'>La Prima Stella</h1>
                <div className="buttons-container">
                    <div className="button-row">
                        <button
                            onClick={() => this.handleButtonClick({ type: "register", photoBookName: "Halley", salesMethod: "sale" })}
                            disabled={this.state.halleyStockNum === 0}
                        >
                            Halley ({this.state.halleyStockNum} 冊)<br />
                            {this.state.halleyStockNum === 0 ?
                                <span className='sold-out'>売り切れ</span> :
                                `売上`}
                        </button>

                        <button
                            onClick={() => this.handleButtonClick({ type: "register", photoBookName: "d'Arrest", salesMethod: "sale" })}
                            disabled={this.state.dArrestStockNum === 0}
                        >
                            d'Arrest ({this.state.dArrestStockNum} 冊)<br />
                            {this.state.dArrestStockNum === 0 ?
                                <span className='sold-out'>売り切れ</span> :
                                `売上`}
                        </button>
                    </div>
                    <div className="button-row">
                        <
                            button onClick={() => this.handleButtonClick({ type: "register", photoBookName: "Halley", salesMethod: "gift" })}
                            disabled={this.state.halleyStockNum === 0}
                        >
                            Halley 交換
                        </button>
                        <
                            button onClick={() => this.handleButtonClick({ type: "register", photoBookName: "d'Arrest", salesMethod: "gift" })}
                            disabled={this.state.dArrestStockNum === 0}
                        >
                            d'Arrest 交換
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPhotoBook;
