import React from 'react';
import { mdiDownload, mdiFilmstripBoxMultiple, mdiMagnetOn } from '@mdi/js';
import Icon from '@mdi/react';

import styles from './index.module.scss';

export default function TorrentsTable({ item }) {
    const title = item.release?.name?.main;
    const desc = item.description;
    const codecLabel = item.codec?.label;
    const seeders = item.seeders;
    const leechers = item.leechers;
    const completed = item.completed_times;
    const updated = item.updated_at;
    const fresh = item.release?.fresh_at;
    const type = item.type?.value;
    const quality = item.quality?.value;
    const codec = item.codec?.value;
    const color = item.color?.description;
    const magnet = item.magnet;
    const torrentFileUrl = item.torrent_file_url || `/api/torrents/${item.id}/download`;

    return (
        <div className={styles.table}>
            <div className={styles.table__info}>
                <h3 className={styles.table__title}>{title}</h3>
                <p className={styles.table__episodes}>
                    Эпизоды: <span>{desc}</span>
                </p>
                <p className={styles.table__tagLine}>
                    {codecLabel} <span className={styles.table__hardsub}>Хардсаб</span>
                </p>
                <p className={styles.table__stats}>
                    ▲{seeders} • ▼{leechers} • ✔{completed}
                </p>
                <p className={styles.table__meta}>
                    {updated} • {fresh} • {type} • {quality} • {codec} • {color}
                </p>
            </div>

            {/* Действия: копировать, открыть magnet, скачать .torrent */}
            <div className={styles.table__actions}>
                {/* Copy magnet to clipboard */}
                <button onClick={() => navigator.clipboard.writeText(magnet)}>
                    <Icon path={mdiFilmstripBoxMultiple} size='20px' />
                </button>

                {/* Download .torrent file */}
                <a href={torrentFileUrl} download={true} className={styles.table__download}>
                    <Icon path={mdiDownload} size='20px' />
                </a>

                {/* Open magnet in new tab (trigger torrent client) */}
                <button onClick={() => window.open(magnet, '_blank')}>
                    <Icon path={mdiMagnetOn} size='20px' />
                </button>
            </div>
        </div>
    );
}
