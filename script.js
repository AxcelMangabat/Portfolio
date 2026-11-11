const navScroll = document.querySelector(".navScroll");
let isNavNavigation = false;
const navLinks = navScroll ? Array.from(navScroll.querySelectorAll("a")) : [];
const navIndicatorClasses = navLinks.map((_, index) => `hovertonav${index + 1}`);

function setActiveNav(index) {
    if (!navScroll) return;
    navScroll.classList.remove(...navIndicatorClasses);
    navScroll.classList.add(`hovertonav${index + 1}`);
}

if (navScroll) {
    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            setActiveNav(index);
            isNavNavigation = true;
            try {
                fullpage_api.moveTo(index + 1);
            } finally {
                isNavNavigation = false;
            }
        });
    });
}


const setTransform = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.style.transform = value;
};

const addClassTo = (selector, ...classes) => {
    const element = document.querySelector(selector);
    if (element) element.classList.add(...classes);
};

const removeClassFrom = (selector, ...classes) => {
    const element = document.querySelector(selector);
    if (element) element.classList.remove(...classes);
};

const sectionAnimations = {
    "0-1-down": () => {
        setTransform('.heroContent', 'translateY(-400px)');
        setTransform('.Workstation', 'translateY(-400px)');
        addClassTo('.purpleromb1', 'moveUp');

        addClassTo('.aboutme', 'fadeUp');
        addClassTo('.aboutinfo', 'fadeUp');
    },

    "1-0-up": () => {
        addClassTo('.aboutme', 'fadeDown');
        addClassTo('.aboutinfo', 'fadeDown');
        addClassTo('.darkcube2', 'ObjDown');
        addClassTo('.purpleromb2', 'moveUpr2');

        setTransform('.heroContent', 'translateY(0px)');
        setTransform('.Workstation', 'translateY(0px)');
        removeClassFrom('.purpleromb1', 'moveUp');
    },

    "1-2-down": () => {
        addClassTo('.aboutme', 'fadeDown2');
        addClassTo('.aboutinfo', 'fadeDown2');
        addClassTo('.darkcube2', 'ObjDown2');

        addClassTo('.experience', 'expFadeUp');

        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconUp');
        });
    },

    "2-1-up": () => {
        addClassTo('.aboutme', 'fadeUp2');
        addClassTo('.aboutinfo', 'fadeUp2');

        addClassTo('.experience', 'expFade');
        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconFade');
        });
    },

    "2-3-down": () => {
        addClassTo('.experience', 'expFadeUp2');
        document.querySelectorAll('.skillIcons').forEach(el => {
            el.classList.add('iconUp2');
        });
    },

    "3-2-up": () => {
        addClassTo('.experience', 'expFadeUp');
        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconFadeIn');
        });
    },

    "3-4-down": () => {
        addClassTo('.slide1 h1', 'slide1Enter');
        addClassTo('.slide1 p', 'slide1Enter');
        addClassTo('.slide1 a', 'slide1Enter');
    },

    "4-3-up": () => {
        addClassTo('.slide1 h1', 'slide1Leave2');
        addClassTo('.slide1 p', 'slide1Leave2');
        addClassTo('.slide1 a', 'slide1Leave2');
    },

    "2-4-down": () => {
        document.querySelectorAll('.skillIcons').forEach(el => {
            el.classList.add('iconUp2');
        });
        addClassTo('.experience', 'expFadeUp2');

        addClassTo('.slide1 h1', 'slide1Enter');
        addClassTo('.slide1 p', 'slide1Enter');
        addClassTo('.slide1 a', 'slide1Enter');
    },

    "4-2-up": () => {
        addClassTo('.slide1 h1', 'slide1Leave2');
        addClassTo('.slide1 p', 'slide1Leave2');
        addClassTo('.slide1 a', 'slide1Leave2');

        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconFadeIn');
        });
    },
    "4-5-down": () => {
        addClassTo('.slide1 h1', 'slide1Leave');
        addClassTo('.slide1 p', 'slide1Leave');
        addClassTo('.slide1 a', 'slide1Leave');
        addClassTo('.darkromb', 'Objslide2Left');
        addClassTo('.darkcube1', 'Objslide2Left');
        addClassTo('.earthcon', 'earthAppear');
        addClassTo('.contactInfo', 'conEnter');
    },
    "5-4-up": () => {
        addClassTo('.slide1 h1', 'slide1Again');
        addClassTo('.slide1 p', 'slide1Again');
        addClassTo('.slide1 a', 'slide1Again');
        addClassTo('.darkromb', 'Objslide2romb');
        addClassTo('.earthcon', 'earthDown');
        addClassTo('.contactInfo', 'conUpward');
        addClassTo('.whitecube1', 'Objwhite');
    },
    "5-1-up": () => {
        addClassTo('.slide1 h1', 'slide1Again');
        addClassTo('.slide1 p', 'slide1Again');
        addClassTo('.slide1 a', 'slide1Again');
        addClassTo('.darkromb', 'Objslide2romb');
        addClassTo('.earthcon', 'earthDown');
        addClassTo('.contactInfo', 'conUpward');
        addClassTo('.whitecube1', 'Objwhite');
    }
};



function resetAnimations() {
    setTransform('.heroContent', '');
    setTransform('.Workstation', '');
    removeClassFrom('.purpleromb1', 'moveUp');

    const aboutMe = document.querySelector('.aboutme');
    const aboutInfo = document.querySelector('.aboutinfo');
    const darkCube2 = document.querySelector('.darkcube2');
    const purpleRomb2 = document.querySelector('.purpleromb2');
    const experience = document.querySelector('.experience');
    const slideHeading = document.querySelector('.slide1 h1');
    const slideParagraph = document.querySelector('.slide1 p');
    const slideLink = document.querySelector('.slide1 a');
    const sphereSm = document.querySelector('.sphereSm');
    const sphereMd = document.querySelector('.sphereMd');
    const sphereLg = document.querySelector('.sphereLg');
    const con1 = document.querySelector('.con1');
    const con2 = document.querySelector('.con2');
    const darkRomb = document.querySelector('.darkromb');
    const darkCube1 = document.querySelector('.darkcube1');
    const earthCon = document.querySelector('.earthcon');
    const contactInfo = document.querySelector('.contactInfo');
    const whiteCube1 = document.querySelector('.whitecube1');
    const certificateTitle = document.querySelector('.certificateTitle');

    aboutMe?.classList.remove('fadeUp', 'fadeDown', 'fadeUp2', 'fadeDown2');
    aboutInfo?.classList.remove('fadeUp', 'fadeDown', 'fadeUp2', 'fadeDown2');
    darkCube2?.classList.remove('ObjDown', 'ObjDown2');
    purpleRomb2?.classList.remove('moveUpr2');

    experience?.classList.remove('expFadeUp', 'expFade', 'expFadeUp2');
    document.querySelectorAll('.skillIcons').forEach(el => {
        el.classList.remove('iconUp', 'iconFade', 'iconUp2', 'iconFadeIn');
    });

    slideHeading?.classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    slideParagraph?.classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    slideLink?.classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    sphereSm?.classList.remove('ballsLeft');
    sphereMd?.classList.remove('ballsLeft');
    sphereLg?.classList.remove('ballsLeft');
    con1?.classList.remove('slide2Right', 'slide2Left');
    con2?.classList.remove('slide2Right', 'slide2Left');
    darkRomb?.classList.remove('Objslide2Left', 'Objslide2romb');
    darkCube1?.classList.remove('Objslide2Left');
    earthCon?.classList.remove('earthAppear', 'earthDown');
    contactInfo?.classList.remove('conEnter', 'conUpward');
    whiteCube1?.classList.remove('Objwhite');
    certificateTitle?.classList.remove('certificateEnter', 'certificateLeave');
    document.querySelectorAll('.certificateCard').forEach(el => {
        el.classList.remove('certificateCardEnter', 'certificateCardLeave');
    });
}


new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 1100,
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    css3: true,
    easingcss3: 'cubic-bezier(0.98, 0, 0.68, 1)',
    verticalCentered: false,
    fitToSection: true,
    fitToSectionDelay: 0,
    easing: 'easeInOutCubic',
    navigation: false,
    keyboardScrolling: true,
    touchSensitivity: 15,
    resetSliders: true,
    responsiveWidth: 992, 

    onLeave: function (origin, destination, direction) {
        
        if (window.innerWidth <= 992 || document.documentElement.classList.contains('fp-responsive')) {
            setActiveNav(destination.index);
            resetAnimations();
            return;
        }

        if (origin.index === 4 && !isNavNavigation) {

            const slides = origin.item.querySelectorAll('.slide');
            const totalSlides = slides.length;

            let activeSlideIndex = 0;
            const activeSlide = origin.item.querySelector('.slide.active');
            if (activeSlide) {
                activeSlideIndex = Array.from(slides).indexOf(activeSlide);
            }


            if (direction === 'down' && activeSlideIndex < totalSlides - 1) {
                fullpage_api.moveSlideRight();
                return false;
            }


            if (direction === 'up' && activeSlideIndex > 0) {
                fullpage_api.moveSlideLeft();
                return false;
            }
        }

        setActiveNav(destination.index);

        resetAnimations();

        const key = `${origin.index}-${destination.index}-${direction}`;
        const animate = sectionAnimations[key];
        if (animate) animate();

        if (origin.item.id === 'Certificates') {
            addClassTo('.certificateTitle', 'certificateLeave');
            document.querySelectorAll('.certificateCard').forEach(el => {
                el.classList.add('certificateCardLeave');
            });
        }
        if (destination.item.id === 'Certificates') {
            addClassTo('.certificateTitle', 'certificateEnter');
            document.querySelectorAll('.certificateCard').forEach(el => {
                el.classList.add('certificateCardEnter');
            });
        }

    },
    afterLoad: function (origin, destination) {
        setActiveNav(destination.index);
        if (['about', 'skills', 'Certificates'].includes(destination.item.id)) {
            const overflow = destination.item.querySelector('.fp-overflow');
            if (overflow) overflow.scrollTop = 0;
        }
    },
    onSlideLeave: function (section, origin, destination, direction) {
        if (window.innerWidth <= 992 || document.documentElement.classList.contains('fp-responsive')) {
             resetAnimations();
            return;
            
        }
        resetAnimations();
        if (section.index === 4) {

            if (origin.index === 0 && destination.index === 1) {
                document.querySelector('.slide1 h1').classList.add('slide1Left');
                document.querySelector('.slide1 p').classList.add('slide1Left');
                document.querySelector('.slide1 a').classList.add('slide1Left');

                document.querySelector('.sphereSm').classList.add('ballsLeft');
                document.querySelector('.sphereMd').classList.add('ballsLeft');
                document.querySelector('.sphereLg').classList.add('ballsLeft');



                document.querySelector('.con1').classList.add('slide2Right');
                document.querySelector('.con2').classList.add('slide2Right');
            }
            if (origin.index === 1 && destination.index === 0) {
                document.querySelector('.slide1 h1').classList.add('slide1Right');
                document.querySelector('.slide1 p').classList.add('slide1Right');
                document.querySelector('.slide1 a').classList.add('slide1Right');


                document.querySelector('.con1').classList.add('slide2Left');
                document.querySelector('.con2').classList.add('slide2Left');
            }
        }
    },



});





(function () {
    const CONFIG = {
        textureUrl: './assets/images/earthmap1k.jpg',
        autoRotateSpeed: -0.15,
        sphereSegments: 64,
        cameraDistance: 2.6
    };
    const container = document.getElementById('globe-container');
    if (!container) return;
    const loadingEl = document.getElementById('globe-loading');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );
    camera.position.z = CONFIG.cameraDistance;
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.6;
    controls.minDistance = CONFIG.cameraDistance;
    controls.maxDistance = CONFIG.cameraDistance;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    const ambient = new THREE.AmbientLight(0x1a2a4a, 0.25);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xaaccff, 1.2);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0x2244aa, 0.35);
    scene.add(fillLight);
    const geometry = new THREE.SphereGeometry(1, CONFIG.sphereSegments, CONFIG.sphereSegments);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1a3a6e,
        roughness: 0.9,
        metalness: 0.05
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    const loader = new THREE.TextureLoader();
    loader.load(
        CONFIG.textureUrl,
        (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            material.map = texture;
            material.color.set(0x3a6eb0);
            material.needsUpdate = true;

            if (loadingEl) loadingEl.classList.add('hidden');
        },
        undefined,
        (err) => {
            console.error('Failed to load Earth texture:', err);
            if (loadingEl) loadingEl.textContent = 'Texture failed to load';
        }
    );
    function latLongToVector3(lat, lon, radius = 1.01) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));

        return new THREE.Vector3(x, y, z);
    }
    function createMarker(color, lat, lon, size = 0.022) {
        const geo = new THREE.SphereGeometry(size, 16, 16);
        const mat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.95
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(latLongToVector3(lat, lon));
        return mesh;
    }
    const orangeMarker = createMarker(0xff8800, 25, -80);
    globe.add(orangeMarker);
    const pinkMarker = createMarker(0xff00aa, 5, 120);
    globe.add(pinkMarker);
    let lastTime = performance.now();
    let isDragging = false;

    controls.addEventListener('start', () => { isDragging = true; });
    controls.addEventListener('end', () => { isDragging = false; });

    function animate(now) {
        requestAnimationFrame(animate);

        const delta = (now - lastTime) / 1000;
        lastTime = now;

        if (!isDragging) {
            globe.rotation.y += CONFIG.autoRotateSpeed * delta;
        }
        const pulse = (Math.sin(now * 0.003) + 1) * 0.5;
        orangeMarker.scale.setScalar(0.9 + pulse * 0.25);
        pinkMarker.scale.setScalar(0.9 + pulse * 0.25);
        controls.update();
        keyLight.position.copy(camera.position).add(
            new THREE.Vector3(5, 3, 2).applyQuaternion(camera.quaternion)
        );
        fillLight.position.copy(camera.position).add(
            new THREE.Vector3(-4, -2, -1).applyQuaternion(camera.quaternion)
        );
        renderer.render(scene, camera);
    }
    function onResize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(onResize).observe(container);
    } else {
        window.addEventListener('resize', onResize);
    }
    onResize();
    requestAnimationFrame(animate);
    window.EarthGlobe = {
        setAutoRotateSpeed(speed) { CONFIG.autoRotateSpeed = speed; },
        pauseAutoRotate() { CONFIG.autoRotateSpeed = 0; },
        resumeAutoRotate(speed = -0.15) { CONFIG.autoRotateSpeed = speed; }
    };
})();

const scrollBtn = document.querySelector('.scrollDown');

if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const current = fullpage_api.getActiveSection().index;
        const totalSections = 6;

        if (current === totalSections - 1) {
            fullpage_api.moveTo(1);
        } else {
            fullpage_api.moveSectionDown();
        }
    });
}

const contact = document.querySelector('.earthcon');

if (contact && 'IntersectionObserver' in window) {
    const Observer = new IntersectionObserver((entries) => {
        if (!scrollBtn) return;

        if (entries[0].isIntersecting) {
            scrollBtn.setAttribute('href', '#hero');
            scrollBtn.classList.add('scrollUp');
            scrollBtn.innerHTML = `
    Back to Top
   <svg class="arrowabt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
    `;
            if (window.innerWidth > 992 && !document.documentElement.classList.contains('fp-responsive')) {
                addClassTo('.aboutme', 'fadeDown');
                addClassTo('.aboutinfo', 'fadeDown');
                addClassTo('.darkcube2', 'ObjDown');
                addClassTo('.purpleromb2', 'moveUpr2');
                setTransform('.heroContent', 'translateY(0px)');
                setTransform('.Workstation', 'translateY(0px)');
                removeClassFrom('.purpleromb1', 'moveUp');
            }
        } else {
            scrollBtn.setAttribute('href', '');
            scrollBtn.classList.remove('scrollUp');
            scrollBtn.innerHTML = `
   <svg class="arrowabt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
                Scroll Down
    `;
        }
    }, {});

    Observer.observe(contact);
}


const navHeader = document.querySelector(".navHeader");

window.addEventListener("scroll", () => {
    navHeader.classList.toggle("scrolled", window.scrollY > 20);
});