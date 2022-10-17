import React from 'react';
import './News.css';
import { Helmet } from "react-helmet";

import TwitterIcon from './img/twitter_icon_circle_blue.png';
import LineIcon from './img/line_icon_circle_green.png';

class News extends React.Component {
    render() {
        return (
            <div className='news'>
                <Helmet
                  title={'雪丸かるる氏 自撮り画像を違法に加工か|AFJニュース'}
                  meta={[
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:site', content: '@kalulu_nya' },
                    { property: 'og:type', content: 'article' },
                    { property: 'og:image', content: 'https://drive.google.com/uc?export=view&id=1ynl1_qBTPnLUUfmPQPgughjZK7-OW2le' },
                    { property: 'og:site_name', content: 'AFJニュース' },
                    { property: 'og:title', content: '【速報】雪丸かるる氏 自撮り画像を違法に加工か' },
                    { property: 'og:description', content: '日本自撮画像重加工規制委員会は4月1日、自称コスプレイヤーの雪丸かるる氏が同日未明にSNSへ投稿した自身の自撮り画像について、「自撮画像重加工取締法第四条に抵触しているおそれがある」' },
                    { property: 'og:url', content: `https://kalulu.fans/News` }
                  ]}
                />
                <div className='dummy-header-top'>
                    <div className='dummy-header-title'>
                        <a href='/News' className='news-logo'>AFJ<span>通信</span></a>
                    </div>                    
                </div>
                <div className='dummy-header'>
                    <ul class="nav-list">
                        <li class="nav-list-item">
                            <a href='/News' className='header-link'>経済</a>
                        </li>
                        <li class="nav-list-item">
                            <a href='/News' className='header-link header-link-selected'>政治</a>
                        </li>
                        <li class="nav-list-item">
                            <a href='/News' className='header-link'>国際</a>
                        </li>
                        <li class="nav-list-item">
                            <a href='/News' className='header-link'>スポーツ</a>
                        </li>
                    </ul>
                </div>
                <div className='breadcrumb'>
                    <p className='breadcrumb-content'>AFJニューストップ&nbsp;&nbsp;</p>
                    <p className='breadcrumb-content'>&gt;&nbsp;&nbsp;政治ニュース一覧&nbsp;&nbsp;</p>
                    <p className='breadcrumb-content'>&gt;&nbsp;&nbsp;ニュース記事</p>
                </div>
                <div className='news-contents'>
                    <div className='news-main'>
                        <iframe className="youtube-frame" src="https://www.youtube.com/embed/Iwf69fg46-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h1 className='news-title'>雪丸かるる氏 自撮り画像を違法に加工か</h1>
                        <p className='news-detail'>
                            <time className='time-news' dateTime='2022-04-01T11:35:30'>2022年4月1日 11時35分</time>
                        </p>
                        <div>
                            <p className='news-detail'>
                                日本自撮画像重加工規制委員会は4月1日、自称コスプレイヤーの雪丸かるる氏が同日未明にSNSへ投稿した自身の自撮り画像について、「自撮画像重加工取締法第四条に抵触しているおそれがある」として、雪丸氏に問題となっている自撮り画像の是正を勧告する方針を決定した。<br/>
                                <br/>
                                雪丸氏は同日、AFJ通信が独自に行なったインタビューに対し、「加工は私にとって死活問題で、今回の決定は到底受け入れることができない。そもそも投稿した画像は自撮画像重加工取締法で定められた範囲内での加工しか行なっておらず、指摘にはあたらない」として、是正勧告に応じない姿勢を明らかにした。<br/>
                                <br/>
                                雪丸氏は「是正勧告を受けた自撮画像の加工は理想のメイドさんに近づくための加工であり、同法第1項で認められているものだ。自分の推しや好きなキャラクターなど、理想の姿に近づくための加工をこのように規制することがあってはならず、憲法で定められた表現の自由を侵害する重大な懸念で、誠に遺憾」とし、法的措置も辞さない姿勢を示した。<br/>
                                <br/>
                                自撮画像重加工取締法第四条では第1項で「コスプレイヤーがSNSやこれに準ずる公共の場に自撮り画像を投稿する際の加工は、原作キャラクターや役職者、その他のモデルとする人物等に限りなく近づきたいという高尚かつ純然たる目的で行うものとする。」と定められており、第2項では「いやしくも第1項に定める範囲を明らかに逸脱した目的で自撮り画像の加工を行なったと認められる場合は、コスプレイヤーはこれを速やかに正さなければならない。」としている。
                            </p>
                            <p className='news-author'>【執筆: AFJ (April Fool Joke)】</p>
                        </div>
                        <div className="share-sns">
                            <a href={'http://twitter.com/share?url=https://kalulu.fans/News&text=【速報】雪丸かるる氏 自撮り画像を違法に加工か+%7C+最新ニュース&via=kalulu_nya&related=kalulu_nya&hashtags=エイプリルフール'} target="_blank" rel="noopener noreferrer">
                                <img className="share-sns" src={TwitterIcon} alt="share with Twitter"></img>
                            </a>
                            <a href={'https://line.me/R/msg/text/?【速報】雪丸かるる氏 自撮り画像を違法に加工か %7C 最新ニュース https://kalulu.fans/News'} target="_blank" rel="noopener noreferrer">
                                <img className="share-sns" src={LineIcon} alt="send with LINE"></img>
                            </a>
                            {/* <a href={'https://line.me/R/share?text=【速報】雪丸かるる氏 自撮り画像を違法に加工か+%7C+最新ニュースkalulu.fans/News'} target="_blank" rel="noopener noreferrer">
                                <img className="share-sns" src={LineIcon} alt="send with LINE"></img>
                            </a> */}
                        </div>
                    </div>
                    <div className='side-contents'>
                        <div className='side-contents-title'>
                            <h2 className='side-contents-title'>話題の記事</h2>
                        </div>
                        <section className='side-contents-modules'>
                            <p className='contents-description'>直近2時間に閲覧されている記事です</p>
                            <div className='contents-items'>
                                <ol className='contents-lists'>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>1</i>
                                                </dt>
                                                <dd className='news-dd'>憲政史上初のコスプレイヤー総理大臣が誕生 臨時国会で首班指名</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>2</i>
                                                </dt>
                                                <dd className='news-dd'>カメラレンズ新規購入時に条件付き特別補助金で支援 新法案成立の見通し</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>3</i>
                                                </dt>
                                                <dd className='news-dd'>「巻き込みリプ事件」頻発 被害者救済に課題</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>4</i>
                                                </dt>
                                                <dd className='news-dd'>首相「コスプレを日本の新しい伝統文化に」各国首脳から歓迎の声</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>5</i>
                                                </dt>
                                                <dd className='news-dd'>「コスプレイヤー呼称にSNSフォロワー10万人基準」閣議決定に全コス連会長「誠に遺憾」</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>6</i>
                                                </dt>
                                                <dd className='news-dd'>セルフRT回数規制撤廃 反応数増加効果に期待</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>7</i>
                                                </dt>
                                                <dd className='news-dd'>与党「変装遊戯者実名開示義務化法案」を強行採決へ 野党は徹底抗戦の構え</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>8</i>
                                                </dt>
                                                <dd className='news-dd'>雪丸氏「自撮画像重加工取締法」廃止を目指す新党を立ち上げか</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>9</i>
                                                </dt>
                                                <dd className='news-dd'>AFJ世論調査 政権支持率急回復 併せ撮影ドタキャン厳罰化への理解広まる</dd>
                                            </dl>
                                        </a>
                                    </li>
                                    <li className='news-list'>
                                        <a href='/News' className='news-link'>
                                            <dl className='news-dl'>
                                                <dt className='news-dt'>
                                                    <i className='news-i'>10</i>
                                                </dt>
                                                <dd className='news-dd'>全コス連「衣装購入補助基金」新設 衣装購入時に申請で給付</dd>
                                            </dl>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </section>
                        <a href="https://www.amazon.co.jp/hz/wishlist/ls/1WZSCAPPA8Z5W/ref=cm_go_nav_hz" target="_blank" rel="noopener noreferrer">
                            <img src="http://drive.google.com/uc?export=view&id=1LkJNT9EXPOMD5pyiyx7touKnWSoXORbi" alt="いくらの広告" className="ad-ikura"></img>
                        </a>
                    </div>
                </div>
                <div className='breadcrumb'>
                    <p className='breadcrumb-content'>AFJニューストップ&nbsp;&nbsp;</p>
                    <p className='breadcrumb-content'>&gt;&nbsp;&nbsp;政治ニュース一覧&nbsp;&nbsp;</p>
                    <p className='breadcrumb-content'>&gt;&nbsp;&nbsp;ニュース記事</p>
                </div>
                <div className='dummy-footer'>
                    <p className='dummy-footer'>※) このページに書かれていることは全てエイプリルフールのネタです。</p>
                </div>
            </div>
        );
    }
}

export default News