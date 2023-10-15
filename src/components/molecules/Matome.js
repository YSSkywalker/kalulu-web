import React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import { Helmet } from "react-helmet";
import './Matome.css';

class Matome extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                  title={'コスプレイヤー暴露まとめ'}
                  meta={[
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:site', content: `@UshinohiProject` },
                    { property: 'og:type', content: 'article' },
                    { property: 'og:image', content: 'http://drive.google.com/uc?export=view&id=1mBX7h1u5S3lWW6yc2qgMaqKexDywzIYB' },
                    { property: 'og:site_name', content: 'コスプレイヤー暴露まとめ' },
                    { property: 'og:title', content: '自称美少女レイヤーの雪丸かるるがヤバいw 高額月収・彼氏画像も!' },
                    { property: 'og:description', content: 'こんにちは!コスプレイヤー暴露まとめ案内人です! 最近、よくTwitterやYouTubeで見かけることが増えてきた 雪丸かるる！！' },
                    { property: 'og:url', content: `https://kalulu.fans/Matome` }
                  ]}
                />
                <div className="article-title">
                    <h4>コスプレイヤー暴露まとめ</h4>
                </div>
                <div className="main-content">
                    <div>
                        <div className="main-title">
                            <h3>自称美少女レイヤーの雪丸かるるがヤバいw<br/>高額月収・彼氏画像も!</h3>
                        </div>
                        <p className="renewed">2021年04月01日 更新</p>
                        {/* ここからSNSボタン */}
                        <center>
                            <div className="sotial">
                                <a href="https://twitter.com/intent/tweet?url=https://kalulu.fans/Matome&text=自称美少女レイヤーの雪丸かるるがヤバいw高額月収・彼氏画像も!|コスプレイヤー暴露まとめ&via=kalulu_nya&related=kalulu_nya&hashtags=雪丸かるる" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a>
                                <a href="https://www.facebook.com/sharer.php?src=bm&u=https://kalulu.fans/Matome&t=自称美少女レイヤーの雪丸かるるがヤバいw高額月収・彼氏画像も!|コスプレイヤー暴露まとめ" target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a>
                                <a href="https://line.me/R/msg/text/?自称美少女レイヤーの雪丸かるるがヤバいw高額月収・彼氏画像も!|コスプレイヤー暴露まとめ https://kalulu.fans/Matome" target="_blank" rel="noopener noreferrer" className="line">LINE</a>
                            </div>
                        </center>
                        {/* ここまでSNSボタン */}
                        <div>
                            <p className='matome-paragraph'>こんにちは!コスプレイヤー暴露まとめ案内人です!</p><br/>
                            <p className='matome-paragraph'>最近、よくTwitterやYouTubeで見かけることが増えてきた</p>
                            <p className='matome-paragraph'>雪丸かるる!</p><br/>
                            <p className='matome-paragraph'>美少女レイヤーを自称してYouTubeでも活躍を続け、彼氏も高スペックというウワサもよく耳にしますよね。</p>
                            <p className='matome-paragraph'>最近ではLINE IDが流出して炎上したとも言われています。</p><br/>
                            <p className='matome-paragraph'>そこで今回は雪丸かるるの経歴・月収や、高スペック彼氏を調べてみました!</p>
                        </div>
                    </div>
                    <div className="matome-index-box">
                        <p className="matome-sub-title">目次</p><br/>
                        <p className='matome-paragraph'>・本名は？</p>
                        <p className='matome-paragraph'>・居住地は？</p>
                        <p className='matome-paragraph'>・高額月収は？</p>
                        <p className='matome-paragraph'>・高スペック彼氏の画像は？</p>
                        <p className='matome-paragraph'>・流出炎上したLINE IDは？</p>
                        <p className='matome-paragraph'>・特技は？</p>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">雪丸かるるのプロフィール</p>
                        </div>
                        <div className="matome-profile">
                            <p className='matome-paragraph'>名前 雪丸かるる</p>
                            <p className='matome-paragraph'>誕生日 6月28日</p>
                            <p className='matome-paragraph'>血液型 A型</p>
                        </div>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">本名は？</p>
                        </div>
                        <div>
                            <p className='matome-paragraph'>雪丸かるるの本名を調べましたが、どうやら非公表のようです。</p>
                            <p className='matome-paragraph'>「『雪丸かるる』が本名なのでは？」という声も一部で上がっており、</p>
                            <p className='matome-paragraph'>もしかしたら「雪丸かるる」が本名なのかもしれません。</p>
                        </div>
                    </div>
                    <a href="https://www.amazon.co.jp/hz/wishlist/ls/1WZSCAPPA8Z5W/ref=cm_go_nav_hz" target="_blank" rel="noopener noreferrer">
                        <img src="http://drive.google.com/uc?export=view&id=1LkJNT9EXPOMD5pyiyx7touKnWSoXORbi" alt="いくらの広告" className="ad-ikura"></img>
                    </a>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">居住地は？</p>
                        </div>
                        <div className="tweet-media-embed">
                            <TwitterTweetEmbed
                             tweetId={'1189518683678265349'}
                            />
                        </div>
                        <div>
                            <p className='matome-paragraph'>雪丸かるるは主に関西で活動しているコスプレイヤーなので、</p>
                            <p className='matome-paragraph'>居住地は近畿地方にありそうです。</p>
                            <p className='matome-paragraph'>東京や名古屋でのイベントにも参加しているようなので、</p>
                            <p className='matome-paragraph'>もしかしたら関東や中部に居住しているかもしれません。</p>
                        </div>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">高額月収は？</p>
                        </div>
                        <div>
                            <p className='matome-paragraph'><s>雪丸かるるはYouTube活動もしているので、</s></p>
                            <p className='matome-paragraph'><s>きっと高額な広告収入がありそうです!</s></p>
                            <p className='matome-paragraph'>(※追加調査の結果、YouTubeチャンネル「雪丸かるる」は</p>
                            <p className='matome-paragraph'>収益化要項を満たしていなようです。)</p>
                            <p className='matome-paragraph'>以下の動画で「普段は働いている」と言っているので、</p>
                            <p className='matome-paragraph'>普通のサラリーマンくらいの月収はあるかもしれません。</p>
                            <p className='matome-paragraph'>今後の活躍に期待ですね!</p>
                        </div>
                        <iframe className="youtube-frame-matome" src="https://www.youtube.com/embed/mbx6BVjqDzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">高スペック彼氏の画像は？</p>
                        </div>
                        <div className="tweet-media-embed">
                            <TwitterTweetEmbed
                             tweetId={'1033708923734253568'}
                            />
                        </div>
                        <div>
                            <p className='matome-paragraph'>雪丸かるるにはどうやら彼氏がいないようです…。</p>
                            <p className='matome-paragraph'>これだけ可愛かったら彼氏はいそうなので、</p>
                            <p className='matome-paragraph'>彼氏の存在を隠しているのかもしれません。</p><br/>
                            <p className='matome-paragraph'>【※追記 (2021年04月01日)】</p>
                            <p className='matome-paragraph'>雪丸かるるには彼氏がいました!</p>
                        </div>
                        <div className="tweet-media-embed">
                            <TwitterTweetEmbed
                             tweetId={'1311997768345370625'}
                            />
                        </div>
                        <div>
                            <p className='matome-paragraph'>ですが、上のツイートから分かるように、</p>
                            <p className='matome-paragraph'>どうやら「高スペック彼氏がいる」というウワサとは裏腹に、</p>
                            <p className='matome-paragraph'>実際の彼氏は無能なようです。</p>
                        </div>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">流出炎上したLINE IDは？</p>
                        </div>
                        <div>
                            <p className='matome-paragraph'>流出したLINE IDを探しましたが、見つけられませんでした…</p>
                            <p className='matome-paragraph'>もしかしたら流出炎上すらなかったのかもしれません。</p>
                        </div>
                        <div className="tweet-media-embed">
                            <TwitterTweetEmbed
                             tweetId={'1202557639835570176'}
                            />
                        </div>
                        <div>
                            <p className='matome-paragraph'>雪丸かるるは公式LINEアカウントを持っているようです。</p>
                            <p className='matome-paragraph'>ともだち追加して話しかけてみました!</p>
                            <img src="http://drive.google.com/uc?export=view&id=1gGO5Qka0z9HaUF57ltPnli-3fnwgcjl9"  alt="LINEのスクリーンショット" className="iphone-ss"></img>
                            <p className='matome-paragraph'>なんと個別に返信してくれるようです!</p>
                            <p className='matome-paragraph'>雪丸かるると個人的に話せるのは非常に魅力的ですね。</p>
                        </div>
                    </div>
                    <a href="https://www.amazon.co.jp/hz/wishlist/ls/1WZSCAPPA8Z5W/ref=cm_go_nav_hz" target="_blank" rel="noopener noreferrer">
                        <img src="http://drive.google.com/uc?export=view&id=1LkJNT9EXPOMD5pyiyx7touKnWSoXORbi" alt="いくらの広告" className="ad-ikura"></img>
                    </a>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">特技は？</p>
                        </div>
                        <iframe className="youtube-frame-matome" src="https://www.youtube.com/embed/vN-vUEWH2Os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <p className='matome-paragraph'>雪丸かるるは2021年の抱負を語るYouTubeで</p>
                            <p className='matome-paragraph'>逆立ちをしながら書初めをしていたので、</p>
                            <p className='matome-paragraph'>逆立ちが特技のようです。</p>
                        </div>
                        <div className="tweet-media-embed">
                            <TwitterTweetEmbed
                             tweetId={'1106516597487722496'}
                            />
                        </div>
                        <div>
                            <p className='matome-paragraph'>さらに、「スティッチのものまね」も特技のようです!</p>
                            <p className='matome-paragraph'>今後YouTubeなどで披露してくれるかもしれません。</p>
                        </div>
                    </div>
                    <div>
                        <div className="matome-sub-title-box">
                            <p className="matome-sub-title">まとめ</p>
                        </div>
                        <div>
                            <p className='matome-paragraph'>いかがでしたか？</p>
                            <p className='matome-paragraph'>今後大人気になること間違いなしのコスプレイヤー</p>
                            <p className='matome-paragraph'>「雪丸かるる」についてまとめてみました!</p>
                            <p className='matome-paragraph'>調べる過程でいろんなことを知ることができて、</p>
                            <p className='matome-paragraph'>雪丸かるるのことがさらに好きになりました。</p>
                            <p className='matome-paragraph'>みなさんが知っていることがあればぜひ教えてください!</p><br/>
                        </div>
                        <a href="https://www.amazon.co.jp/hz/wishlist/ls/1WZSCAPPA8Z5W/ref=cm_go_nav_hz" target="_blank" rel="noopener noreferrer">
                            <img src="http://drive.google.com/uc?export=view&id=1LkJNT9EXPOMD5pyiyx7touKnWSoXORbi" alt="いくらの広告" className="ad-ikura"></img>
                        </a>
                        <a href="https://www.amazon.co.jp/hz/wishlist/ls/1WZSCAPPA8Z5W/ref=cm_go_nav_hz" target="_blank" rel="noopener noreferrer">
                            <img src="http://drive.google.com/uc?export=view&id=1LkJNT9EXPOMD5pyiyx7touKnWSoXORbi" alt="いくらの広告" className="ad-ikura"></img>
                        </a>
                        <div>
                            <p className="april-fool">エープリルフールのジョークページだよ!</p><br/><br/>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Matome;
