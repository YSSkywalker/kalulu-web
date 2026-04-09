import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaLine,
  FaAngleDown,
  FaShoppingBag,
} from 'react-icons/fa';
import './Top2.css';

// ── 既存画像（そのまま流用可能） ────────────────────────────────
import ProfileImage from './img/profile-image.JPG';
import FantiaBanner from './img/fantia-banner.png';
import InstagramBanner from './img/instagram-banner.png';

// ── Hero背景画像（差し替え用。用意できたらコメントアウトを外す） ──
// import HeroImage from './img/hero-image.jpg';

// ── ギャラリー画像（6枚。用意できたらコメントアウトを外す） ────────
// import Gallery1 from './img/gallery-1.jpg';
// import Gallery2 from './img/gallery-2.jpg';
// import Gallery3 from './img/gallery-3.jpg';
// import Gallery4 from './img/gallery-4.jpg';
// import Gallery5 from './img/gallery-5.jpg';
// import Gallery6 from './img/gallery-6.jpg';

// ── グッズ画像（3枚。用意できたらコメントアウトを外す） ─────────
// import Goods1 from './img/goods-1.jpg';
// import Goods2 from './img/goods-2.jpg';
// import Goods3 from './img/goods-3.jpg';

// ================================================================
// 定数 — リンクや商品データはここだけ変更すれば全体に反映される
// ================================================================

// Suzuri ショップURL（後から差し替える場合はここだけ修正）
const SUZURI_SHOP_URL = 'https://suzuri.jp/kalulu_nya';

// ギャラリーデータ（画像ができたら src を差し替える）
const GALLERY_ITEMS = [
  { id: 1, src: null, alt: 'コスプレ写真 1' },
  { id: 2, src: null, alt: 'コスプレ写真 2' },
  { id: 3, src: null, alt: 'コスプレ写真 3' },
  { id: 4, src: null, alt: 'コスプレ写真 4' },
  { id: 5, src: null, alt: 'コスプレ写真 5' },
  { id: 6, src: null, alt: 'コスプレ写真 6' },
  // 画像が揃ったら以下のようにコメントアウトを解除:
  // { id: 1, src: Gallery1, alt: 'コスプレ写真 1' },
];

// グッズデータ（商品画像と名前を後から差し替える）
const GOODS_ITEMS = [
  { id: 1, src: null, name: 'Tシャツ', label: '商品画像 1\n（1:1 推奨）' },
  { id: 2, src: null, name: 'トートバッグ', label: '商品画像 2\n（1:1 推奨）' },
  { id: 3, src: null, name: 'アクリルスタンド', label: '商品画像 3\n（1:1 推奨）' },
  // 画像が揃ったら以下のようにコメントアウトを解除:
  // { id: 1, src: Goods1, name: 'Tシャツ', label: 'Tシャツ' },
];

// SNSリンク定義
const SNS_LINKS = [
  {
    href: 'https://twitter.com/kalulu_nya',
    label: 'Twitter / X',
    icon: FaTwitterSquare,
    ariaLabel: 'Twitter（新しいタブで開きます）',
  },
  {
    href: 'https://www.youtube.com/@KaluluYukimaru',
    label: 'YouTube',
    icon: FaYoutubeSquare,
    ariaLabel: 'YouTube（新しいタブで開きます）',
  },
  {
    href: 'https://www.instagram.com/kalulu_nya',
    label: 'Instagram',
    icon: FaInstagram,
    ariaLabel: 'Instagram（新しいタブで開きます）',
  },
  {
    href: 'https://lin.ee/9DzGkyr',
    label: 'LINE',
    icon: FaLine,
    ariaLabel: 'LINE（新しいタブで開きます）',
  },
];

// ================================================================
// Component
// ================================================================
function Top2() {
  return (
    <div className="t2">

      {/* ================================================================
          Hero Section
          ================================================================ */}
      <section className="t2-hero" aria-label="メインビジュアル">
        {/* 背景画像エリア。HeroImage が用意できたら style を差し替える */}
        <div
          className="t2-hero-bg"
          // style={{ backgroundImage: `url(${HeroImage})` }}
          role="img"
          aria-label="雪丸かるるのメイン写真"
        >
          {/* 画像が入ったら削除する */}
          <div className="t2-placeholder t2-placeholder--hero">
            FV用メイン画像<br />
            （縦長 2:3 または 9:16 推奨 / 1200px以上）
          </div>
        </div>

        {/* テキスト・オーバーレイ */}
        <div className="t2-hero-overlay">
          <div className="t2-hero-content">
            <p className="t2-hero-eyebrow">Cosplayer</p>

            <h1 className="t2-hero-name">
              <span className="t2-hero-name-ja">雪丸かるる</span>
              <span className="t2-hero-name-en">Kalulu Yukimaru</span>
            </h1>

            <p className="t2-hero-tagline">笑顔でつなぐ、輝くコスプレ</p>

            {/* Hero内 SNSアイコン */}
            <div className="t2-hero-sns" role="list">
              {SNS_LINKS.map(({ href, ariaLabel, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t2-hero-sns-link"
                  aria-label={ariaLabel}
                  role="listitem"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* スクロール誘導 */}
          <a href="#about" className="t2-scroll-indicator" aria-label="下にスクロール">
            <FaAngleDown aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ================================================================
          About / Profile Section
          ================================================================ */}
      <section className="t2-about" id="about" aria-labelledby="t2-about-title">
        <div className="t2-container">
          <h2 className="t2-section-title" id="t2-about-title">Profile</h2>

          <div className="t2-about-inner">
            {/* プロフィール写真 */}
            <div className="t2-about-photo">
              <img
                src={ProfileImage}
                alt="雪丸かるる プロフィール写真"
                className="t2-profile-img"
              />
              {/*
                画像がない場合は上の <img> をコメントアウトして下を有効にする:
                <div className="t2-placeholder t2-placeholder--profile">
                  プロフィール画像<br />（1:1 推奨 / 600×600px以上）
                </div>
              */}
            </div>

            {/* テキスト情報 */}
            <div className="t2-about-body">
              <h3 className="t2-about-name">雪丸かるる</h3>
              <p className="t2-about-name-en">Kalulu Yukimaru</p>

              <p className="t2-about-desc">
                会社員をしながらコスプレとYouTubeの活動に勤しんでいる。<br />
                時間が足りなくて毎晩泣いている。
              </p>

              <ul className="t2-about-meta">
                <li>A型 / 6月28日生まれ</li>
                <li>得意ジャンル：アイドル系・笑顔コスプレ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Gallery Section
          ================================================================ */}
      <section className="t2-gallery" aria-labelledby="t2-gallery-title">
        <div className="t2-container">
          <h2 className="t2-section-title t2-section-title--light" id="t2-gallery-title">
            Gallery
          </h2>

          <div className="t2-gallery-grid">
            {GALLERY_ITEMS.map(({ id, src, alt }) => (
              <div key={id} className="t2-gallery-cell">
                {src ? (
                  <img src={src} alt={alt} className="t2-gallery-img" loading="lazy" />
                ) : (
                  <div className="t2-placeholder t2-placeholder--gallery">
                    ギャラリー {id}<br />（3:4 推奨）
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="t2-gallery-cta">
            <a
              href="https://www.instagram.com/kalulu_nya"
              target="_blank"
              rel="noopener noreferrer"
              className="t2-btn-outline"
            >
              Instagram でもっと見る →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          Works Section
          ================================================================ */}
      <section className="t2-works" aria-labelledby="t2-works-title">
        <div className="t2-container">
          <h2 className="t2-section-title" id="t2-works-title">Works</h2>

          <div className="t2-works-grid">
            {/* YouTube */}
            <div className="t2-works-block">
              <h3 className="t2-works-label">YouTube</h3>
              <div className="t2-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/pbF2PD-woPU?si=ZrbIGCIM4GoMWv2y"
                  title="YouTube動画プレイヤー"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Spotify */}
            <div className="t2-works-block">
              <h3 className="t2-works-label">Music</h3>
              <iframe
                src="https://open.spotify.com/embed/album/77ITiWghjAZcQYH1ZFEXje?utm_source=generator&theme=0"
                title="Spotifyプレイヤー"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="t2-spotify"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Goods / Suzuri Section
          Works の後・Links の前に配置。
          活動の流れを受けて「グッズも作ってます」と自然につなぎ、
          そのままSNSフォロー・外部導線へ誘導する。
          ================================================================ */}
      <section className="t2-goods" aria-labelledby="t2-goods-title">
        <div className="t2-container">
          <h2 className="t2-section-title" id="t2-goods-title">Goods</h2>

          <p className="t2-goods-desc">
            オリジナルグッズを SUZURI で販売中！<br />
            Tシャツやトートバッグなど、日常使いしやすいアイテムが揃っています。
          </p>

          {/* 商品カードグリッド */}
          <div className="t2-goods-grid">
            {GOODS_ITEMS.map(({ id, src, name, label }) => (
              <a
                key={id}
                href={SUZURI_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="t2-goods-card"
                aria-label={`${name} — SUZURIショップへ（新しいタブで開きます）`}
              >
                <div className="t2-goods-img-wrap">
                  {src ? (
                    <img src={src} alt={name} className="t2-goods-img" loading="lazy" />
                  ) : (
                    <div className="t2-placeholder t2-placeholder--goods">
                      {label}
                    </div>
                  )}
                </div>
                <p className="t2-goods-name">{name}</p>
              </a>
            ))}
          </div>

          {/* SUZURIへのCTAボタン */}
          <div className="t2-goods-cta">
            <a
              href={SUZURI_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="t2-btn-primary"
            >
              <FaShoppingBag className="t2-btn-icon" aria-hidden="true" />
              SUZURIショップを見る
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          Links / SNS Section
          ================================================================ */}
      <section className="t2-links" aria-labelledby="t2-links-title">
        <div className="t2-container">
          <h2 className="t2-section-title" id="t2-links-title">Links</h2>

          {/* SNSアイコン */}
          <nav aria-label="SNSリンク">
            <ul className="t2-sns-list">
              {SNS_LINKS.map(({ href, label, icon: Icon, ariaLabel }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t2-sns-item"
                    aria-label={ariaLabel}
                  >
                    <Icon className="t2-sns-icon" aria-hidden="true" />
                    <span className="t2-sns-label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* バナー */}
          <div className="t2-banners">
            <a
              href="https://fantia.jp/fanclubs/65018"
              target="_blank"
              rel="noopener noreferrer"
              className="t2-banner-link"
              aria-label="Fantia公式（新しいタブで開きます）"
            >
              <img src={FantiaBanner} alt="Official Fantia" />
            </a>
            <a
              href="https://www.instagram.com/kalulu_nya"
              target="_blank"
              rel="noopener noreferrer"
              className="t2-banner-link"
              aria-label="Instagram公式（新しいタブで開きます）"
            >
              <img src={InstagramBanner} alt="Official Instagram" />
            </a>
          </div>

          {/* 言語切り替え */}
          <div className="t2-lang">
            <Link to="/EN" className="t2-lang-link">
              English →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Top2;
