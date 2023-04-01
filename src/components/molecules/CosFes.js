import React from 'react';
import './CosFes.css';

import CosFesIcon from './img/cos_fes_icon.jpg'
import AppThumnail1 from './img/app_thumnail1.PNG'
import AppThumnail2 from './img/app_thumnail2.PNG'
import AppThumnail3 from './img/app_thumnail3.PNG'
import AppThumnail4 from './img/app_thumnail4.PNG'

class News extends React.Component {
    render() {
        return (
            <div className='cos-fes'>
                <div>
                    <h3>
                        App Shopプレビュー
                    </h3>
                </div>
                <hr></hr>
                <div className='app-notification-bg'>
                    <p className='app-notification'>このAppは、あらゆるデバイスでもご利用いただけません。</p>
                </div>
                <div className='app-overview-contents'>
                    <div className='app-overview-item'>
                        <div className='app-icon'>
                            {/* アイコン */}
                            <img className='app-icon-img' src={CosFesIcon}></img>
                        </div>
                    </div>
                    <div className='app-overview-item app-overview-item-description'>
                        <div>
                            <h2 className='app-title'>雪丸かるる！コスプレイヤーフェスティバル</h2>
                            <p className='app-blue app-developer'>Kalulu Inc.</p>
                        </div>
                        <div>
                            <p className='app-small-font app-blue no-margin'>入手不可</p>
                            <p className='app-gray app-small-font no-margin'>無料・App内課金が有ります</p>
                        </div>
                        <div>
                            <p className='app-gray app-small-font'>このコンテンツは実際に提供される可能性はありません。</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h4>スクリーンショット</h4>
                    <div className="slide-wrap">
                        <div className="slide-box">
                            <iframe className='app-video' src="https://www.youtube.com/embed/5JfSLE4WT40?autoplay=1&mute=1&loop=1&playlist=5JfSLE4WT40&controls=0&end=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="slide-box">
                            <img className='app-thumnail' alt='アプリサムネイル画像' src={AppThumnail1}></img>
                        </div>
                        <div className="slide-box">
                            <img className='app-thumnail' alt='アプリサムネイル画像' src={AppThumnail2}></img>
                        </div>
                        <div className="slide-box">
                            <img className='app-thumnail' alt='アプリサムネイル画像' src={AppThumnail3}></img>
                        </div>
                        <div className="slide-box">
                            <img className='app-thumnail' alt='アプリサムネイル画像' src={AppThumnail4}></img>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <p className='app-small-font'>雪丸かるるが歌う楽曲が遊べる新感覚のリズムゲーム！</p>
                    <p className='app-small-font'>普段リズムゲームで遊ばないあなたも、きっとお気に入りの楽曲が見つかる！</p>
                </div>
                <hr></hr>
                <div>
                    <h4>評価とレビュー</h4>
                    <div className='app-rate app-small-font app-light-gray'>
                        <span>1.3</span>/5
                    </div>
                    <div className='rate-comment-contents'>
                        <div className='rate-comment-content'>
                            <div>
                                <p className='rate-star'>
                                    <span>★</span>★★★★
                                </p>
                                <p className='app-very-small-font'>匿名、2023/04/01</p>
                                <p className='app-small-font app-rate-title no-margin'>シンプルにパクリ</p>
                                <p className='app-small-font app-rate-comment no-margin'>やれば分かりますが、あの有名ソシャゲのパクリです。</p>
                            </div>
                        </div>
                        <div className='rate-comment-content'>
                            <div>
                                <p className='rate-star'>
                                    <span>★</span>★★★★
                                </p>
                                <p className='app-very-small-font'>匿名、2023/04/01</p>
                                <p className='app-small-font app-rate-title no-margin'>バグ多すぎ</p>
                                <p className='app-small-font app-rate-comment no-margin'>プレイ中に急に雪丸かるるのYouTubeチャンネルに飛ばされる。動画が面白かったから良いものの…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News