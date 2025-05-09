import { ChevronLeft, ChevronRight } from 'lucide-react';

import stl from './index.module.scss';

export const Banner = () => {
    return (
        <section className={stl.banner}>
            <div className={stl.banner__wrapper}>
                <div className={stl.content}>
                    <h2>Уважаемые пользователи!</h2>
                    <p>
                        В настоящее время наши силы направлены на то, чтобы полностью обеспечить
                        соблюдение требований российского законодательства.
                    </p>
                    <p>
                        В этой связи администрацией сайта проводится регулярная модерация контента.
                        Ролики, которые по-нашему мнению могут содержать запрещенную к
                        распространению информацию — удалены.
                    </p>
                </div>
                <div className={stl.controls}>
                    <button className={stl.arrowBtn}>
                        <ChevronLeft size={20} />
                    </button>
                    <button className={stl.arrowBtn}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
