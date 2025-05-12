import React from 'react';
import { FaBeer } from 'react-icons/fa';
import {
    mdiArrowDown,
    mdiArrowUp,
    mdiCheck,
    mdiContentCopy,
    mdiDownload,
    mdiMagnetOn,
} from '@mdi/js';
import Icon from '@mdi/react';

import styles from './index.module.scss';

const TorrentsTable = ({ item }) => {
    const title = item?.release?.name?.main;
    const desc = item?.description; // “1-6”
    const codecLabel = item?.codec?.label; // “HEVC” или undefined
    const seeders = item?.seeders;
    const leechers = item?.leechers;
    const completed = item?.completed_times;
    const updated = item?.updated_at; // e.g. “10.05.2025, 10:46:36”
    const type = item?.type?.value; // “WEB-DLRip”
    const quality = item?.quality?.value; // “1080p”
    const codec = item?.codec?.value; // “x265/HEVC”
    const bitrate = item?.color?.description; // “10-bit”
    const magnet = item?.magnet;
    const torrentFileUrl = item?.torrent_file_url || `/api/torrents/${item?.id}/download`;
    const members = item?.torrent_members || [];

    return (
        <div className={styles.table}>
            <div className={styles.table__info}>
                <h3 className={styles.table__info__title}>{title}</h3>
                <div className={styles.table__info__format}>
                    <p className={styles.table__info__format__episodes}>
                        Эпизоды: <span>{desc}</span>
                    </p>
                    <p className={styles.table__info__format__badges}>
                        {codecLabel && (
                            <span className={styles.table__info__format__badges__badge}>
                                {codecLabel}
                            </span>
                        )}{' '}
                        <span className={styles.table__info__format__badges__hardsub}>Хардсаб</span>
                    </p>
                </div>
                <p className={styles.table__info__stats}>
                    <Icon path={mdiArrowUp} size='15px' color='#4caf50' />
                    {seeders} • <Icon path={mdiArrowDown} size='15px' color='#f44336' />
                    {leechers} • <Icon path={mdiCheck} size='15px' color='#2196f3' />
                    {completed}
                </p>
                <p className={styles.table__info__meta}>
                    {updated} • {type} • {quality} • {codec} • {bitrate}
                </p>

                {members.length > 0 && (
                    <div className={styles.table__info__members}>
                        {members.map((member) => (
                            <span key={member.id}>
                                {member.role.description}: {member.nickname}
                            </span>
                        ))}
                    </div>
                )}
            </div>


            <div className={styles.table__actions}>
                <button
                    onClick={() => navigator.clipboard.writeText(magnet)}
                    aria-label='Copy magnet'
                >
                    <Icon path={mdiContentCopy} size='20px' />
                </button>
                <a
                    href={torrentFileUrl}
                    download={true}
                    className={styles.table__download}
                    aria-label='Download torrent file'
                >
                    <Icon path={mdiDownload} size='20px' />
                </a>
                <button onClick={() => window.open(magnet, '_blank')} aria-label='Open magnet'>
                    <Icon path={mdiMagnetOn} size='20px' />
                </button>
            </div>
        </div>
    );
};

export default TorrentsTable;
