document.documentElement.classList.add('js');

// Scroll reveal with a safe fallback for older browsers
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
} else {
    revealElements.forEach((el) => el.classList.add('visible'));
}

// Subtle sticky header state
const header = document.querySelector('header');
if (header) {
    const updateHeaderState = () => {
        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
}

// Language toggle (EN default)
const translations = {
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_content: 'Content',
        nav_community: 'Community',
        tag_main_game: 'Main Game',
        tag_favorite_series: 'Favorite Series',
        tag_large_scale: 'Large Scale',
        tag_linux_distro: 'Linux Distro',
        tag_in_progress: 'In Progress',
        tag_web: 'Web',
        tag_arch: 'Arch Linux',
        tag_linux: 'Linux',
        link_github_arrow: 'GitHub →',
        link_source_arrow: 'Source →',
        footer_built: '© 2026 ManKrawiec. Built with ❤️',
        about_hero_title: 'About Me',
        about_hero_sub: 'Gamer, streamer and creator from Poland — I live for games, code and community.',
        about_location: '🇵🇱 Poland',
        about_intro_1: 'Hey! I\'m ManKrawiec — a gamer and creator from Poland. I stream on Twitch daily, mainly playing War Thunder, but I also love Call of Duty and Battlefield. In my free time I code, tinker with Linux and build various projects — from websites to my own Linux distribution, Maxis-Linux. I often play with my streaming partner',
        about_intro_2: ' — come join the streams!',
        about_stat_streamer: 'Streamer',
        about_stat_dev: 'Developer',
        about_stat_arch: 'Arch Linux User',
        about_stat_poland: 'Poland',
        about_games_title: 'My Games',
        about_wt_desc: 'My main game — tanks, planes and ships. The grind never ends, but the satisfaction of a good frag is priceless.',
        about_cod_desc: 'A true CoD fan — from the classics to the latest entries. Fast action, fast frags.',
        about_bf_desc: 'Massive battles, vehicles, destruction — Battlefield is the game you can always count on for epic moments.',
        about_projects_title: 'Projects',
        about_maxis_desc: 'My own Linux distribution project. It\'s not perfect yet, but it was a massive learning experience — from bootloader to desktop.',
        about_site_title: 'This Website',
        about_site_desc: 'My personal website — written from scratch in HTML, CSS and JS. Hosted on GitHub Pages.',
        about_dotfiles_title: 'Dotfiles & Hyprland',
        about_dotfiles_desc: 'My Arch Linux setup with Hyprland — custom themes, scripts, configs. All open source on GitHub.',
        about_collab_title: 'Collab Modes',
        about_duo_title: 'Twitch Duo Nights',
        about_duo_desc: 'ManKrawiec + Safigy live together: fast FPS, War Thunder chaos, and pure duo energy.',
        about_duo_link: '▶ Watch the duo on Twitch',
        about_tiktok_title: 'TikTok Clip Combo',
        about_tiktok_desc: 'ManKrawiec + JajkoPL: quick highlights, funny moments and short-form gaming clips.',
        about_tiktok_link: '🎵 See duo clips on TikTok',
        about_squad_title: 'Full Squad Drop',
        about_squad_desc: 'When all three of us jump in, that is where the best moments and funniest voice chat happen.',
        about_squad_link: '💬 Join Discord for squad alerts',
        content_hero_title: 'My Content',
        content_hero_sub: 'Games, streams, projects — everything I create in one place.',
        content_play_title: 'What I Play',
        content_wt_desc: 'My main game on stream. Tanks, planes, ships — the grind goes on, but the frags are worth it.',
        content_cod_desc: 'One of my favorite series. From campaigns to multiplayer — a true FPS classic.',
        content_bf_desc: 'Massive maps, destruction, vehicles. Battlefield is the definition of an epic gaming moment.',
        content_drops_title: 'Content Drops',
        content_twitch_title: 'Twitch: Duo with Safigy',
        content_twitch_desc: 'Long live sessions with high-energy matches, chill banter and squad-level chaos.',
        content_twitch_link: 'Watch on Twitch →',
        content_tiktok_title: 'TikTok: Clips with JajkoPL',
        content_tiktok_desc: 'Short clips packed with highlights and funny moments from our sessions.',
        content_tiktok_link: 'Open TikTok →',
        content_squad_title: 'Special: Full Squad Nights',
        content_squad_desc: 'Big sessions with me, Safigy and JajkoPL. Announcements drop first on Discord.',
        content_squad_link: 'Get alerts on Discord →',
        content_projects_title: 'Projects',
        content_maxis_title: 'Maxis-Linux — Linux Distro',
        content_maxis_desc: 'My own Linux distribution, Maxis-Linux. A project in progress — tons of learning from bootloader to desktop environment.',
        content_dotfiles_title: 'Arch + Hyprland Dotfiles',
        content_dotfiles_desc: 'My custom setup — themes, scripts, configs. All open source on GitHub.',
        content_site_title: 'ManKrawiec.github.io',
        content_site_desc: 'This website — built from scratch in HTML, CSS and JS. No frameworks, pure web dev.',
        contact_hero_title: 'Join the Community',
        contact_hero_sub: 'Find me across the internet — let\'s connect!',
        contact_find_title: 'Find Me Here',
        contact_twitch_desc: 'Watch me stream live',
        contact_github_desc: 'Open source projects & code',
        contact_discord_desc: 'Chat with the community'
    },
    pl: {
        nav_home: 'Strona główna',
        nav_about: 'O mnie',
        nav_content: 'Treści',
        nav_community: 'Społeczność',
        tag_main_game: 'Główna gra',
        tag_favorite_series: 'Ulubiona seria',
        tag_large_scale: 'Na dużą skalę',
        tag_linux_distro: 'Dystrybucja Linux',
        tag_in_progress: 'W trakcie',
        tag_web: 'Web',
        tag_arch: 'Arch Linux',
        tag_linux: 'Linux',
        link_github_arrow: 'GitHub →',
        link_source_arrow: 'Źródło →',
        footer_built: '© 2026 ManKrawiec. Zbudowane z ❤️',
        about_hero_title: 'O mnie',
        about_hero_sub: 'Gracz, streamer i twórca z Polski — żyję grami, kodem i społecznością.',
        about_location: '🇵🇱 Polska',
        about_intro_1: 'Hej! Jestem ManKrawiec — gracz i twórca z Polski. Streamuję codziennie na Twitchu, głównie War Thunder, ale uwielbiam też Call of Duty i Battlefield. W wolnym czasie koduję, grzebię w Linuxie i buduję różne projekty — od stron po własną dystrybucję Linux, Maxis-Linux. Często gram z moim partnerem streamingowym',
        about_intro_2: ' — wbijaj na streamy!',
        about_stat_streamer: 'Streamer',
        about_stat_dev: 'Developer',
        about_stat_arch: 'Użytkownik Arch Linux',
        about_stat_poland: 'Polska',
        about_games_title: 'Moje gry',
        about_wt_desc: 'Moja główna gra — czołgi, samoloty i okręty. Grind się nie kończy, ale dobre fragi są bezcenne.',
        about_cod_desc: 'Prawdziwy fan CoD — od klasyków po najnowsze odsłony. Szybka akcja, szybkie fragi.',
        about_bf_desc: 'Ogromne bitwy, pojazdy, destrukcja — Battlefield zawsze daje epickie momenty.',
        about_projects_title: 'Projekty',
        about_maxis_desc: 'Mój własny projekt dystrybucji Linux. Nie jest idealny, ale to ogromna lekcja — od bootloadera po pulpit.',
        about_site_title: 'Ta strona',
        about_site_desc: 'Moja strona osobista — napisana od zera w HTML, CSS i JS. Hostowana na GitHub Pages.',
        about_dotfiles_title: 'Dotfiles & Hyprland',
        about_dotfiles_desc: 'Moja konfiguracja Arch Linux z Hyprland — motywy, skrypty, konfiguracje. Wszystko open source na GitHubie.',
        about_collab_title: 'Tryby współpracy',
        about_duo_title: 'Twitch Duo Nights',
        about_duo_desc: 'ManKrawiec + Safigy na żywo: szybkie FPS-y, chaos w War Thunder i czysta energia duetu.',
        about_duo_link: '▶ Oglądaj duo na Twitchu',
        about_tiktok_title: 'TikTok Clip Combo',
        about_tiktok_desc: 'ManKrawiec + JajkoPL: szybkie highlighty, śmieszne momenty i krótkie klipy.',
        about_tiktok_link: '🎵 Zobacz klipy na TikToku',
        about_squad_title: 'Full Squad Drop',
        about_squad_desc: 'Gdy cała trójka wchodzi, lecą najlepsze momenty i najśmieszniejszy voice chat.',
        about_squad_link: '💬 Dołącz na Discord po alerty',
        content_hero_title: 'Moje treści',
        content_hero_sub: 'Gry, streamy, projekty — wszystko, co tworzę, w jednym miejscu.',
        content_play_title: 'W co gram',
        content_wt_desc: 'Moja główna gra na streamach. Czołgi, samoloty, okręty — grind trwa, ale fragi są tego warte.',
        content_cod_desc: 'Jedna z moich ulubionych serii. Od kampanii po multi — klasyk FPS.',
        content_bf_desc: 'Wielkie mapy, destrukcja, pojazdy. Battlefield to definicja epickiej akcji.',
        content_drops_title: 'Nowe materiały',
        content_twitch_title: 'Twitch: Duo z Safigy',
        content_twitch_desc: 'Długie live’y z energicznymi meczami, luźną gadką i chaosem drużynowym.',
        content_twitch_link: 'Oglądaj na Twitchu →',
        content_tiktok_title: 'TikTok: Klipy z JajkoPL',
        content_tiktok_desc: 'Krótkie klipy pełne highlightów i zabawnych momentów z naszych sesji.',
        content_tiktok_link: 'Otwórz TikTok →',
        content_squad_title: 'Specjalne: Full Squad Nights',
        content_squad_desc: 'Duże sesje z Safigy i JajkoPL. Zapowiedzi najpierw na Discordzie.',
        content_squad_link: 'Alerty na Discordzie →',
        content_projects_title: 'Projekty',
        content_maxis_title: 'Maxis-Linux — dystrybucja',
        content_maxis_desc: 'Moja własna dystrybucja Linux, Maxis-Linux. Projekt w toku — mnóstwo nauki od bootloadera po pulpit.',
        content_dotfiles_title: 'Arch + Hyprland Dotfiles',
        content_dotfiles_desc: 'Mój setup — motywy, skrypty, konfiguracje. Wszystko open source na GitHubie.',
        content_site_title: 'ManKrawiec.github.io',
        content_site_desc: 'Ta strona — zbudowana od zera w HTML, CSS i JS. Bez frameworków, czysty web dev.',
        contact_hero_title: 'Dołącz do społeczności',
        contact_hero_sub: 'Znajdziesz mnie w sieci — połączmy się!',
        contact_find_title: 'Znajdziesz mnie tutaj',
        contact_twitch_desc: 'Oglądaj moje live streamy',
        contact_github_desc: 'Open source i kod',
        contact_discord_desc: 'Pogadaj ze społecznością'
    }
};

const langToggle = document.getElementById('lang-toggle');
const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const value = translations[lang] && translations[lang][key];
        if (value) el.textContent = value;
    });
    if (langToggle) langToggle.textContent = lang === 'en' ? 'PL' : 'EN';
    localStorage.setItem('lang', lang);
};

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'en';
        applyLanguage(current === 'en' ? 'pl' : 'en');
    });
}

const initialLang = localStorage.getItem('lang') || 'en';
applyLanguage(initialLang);

// Image fallback in case any asset fails to load
const imageFallback = (label) => {
    const safeLabel = label || 'Image unavailable';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500" viewBox="0 0 900 500">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="#0f1f2f"/><stop offset="100%" stop-color="#092a24"/>
</linearGradient></defs><rect width="900" height="500" fill="url(#g)"/>
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
fill="#d7f6ee" font-family="Arial, sans-serif" font-size="34">${safeLabel}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = imageFallback(img.alt);
    });
});

// Scroll-driven scene animation
const scrollScenes = document.querySelectorAll('[data-scroll-scene]');
if (scrollScenes.length) {
    let ticking = false;

    const updateScenes = () => {
        scrollScenes.forEach((scene) => {
            const rect = scene.getBoundingClientRect();
            const viewH = window.innerHeight || document.documentElement.clientHeight;
            const total = rect.height - viewH;
            let progress = 0;

            if (total > 0) {
                const scrolled = Math.min(Math.max(-rect.top, 0), total);
                progress = scrolled / total;
            } else {
                progress = rect.top < 0 ? 1 : 0;
            }

            scene.style.setProperty('--scene-progress', progress.toFixed(4));
        });
        ticking = false;
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateScenes);
        }
    };

    updateScenes();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
}
