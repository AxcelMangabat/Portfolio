const navScroll = document.querySelector(".navScroll");
const navLinks = navScroll.querySelectorAll("a");

navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        navScroll.classList.remove(
            "hovertonav1",
            "hovertonav2",
            "hovertonav3",
            "hovertonav4",
            "hovertonav5"
        );

        navScroll.classList.add(`hovertonav${index + 1}`);
    });
});


const sectionAnimations = {


    "0-1-down": () => {
        document.querySelector('.heroContent').style.transform = "translateY(-400px)";
        document.querySelector('.Workstation').style.transform = "translateY(-400px)";
        document.querySelector('.purpleromb1').classList.add('moveUp');

        document.querySelector('.aboutme').classList.add('fadeUp');
        document.querySelector('.aboutinfo').classList.add('fadeUp');
    },

    "1-0-up": () => {
        document.querySelector('.aboutme').classList.add('fadeDown');
        document.querySelector('.aboutinfo').classList.add('fadeDown');
        document.querySelector('.darkcube2').classList.add('ObjDown');
        document.querySelector('.purpleromb2').classList.add('moveUpr2');

        document.querySelector('.heroContent').style.transform = "translateY(0px)";
        document.querySelector('.Workstation').style.transform = "translateY(0px)";
        document.querySelector('.purpleromb1').classList.remove('moveUp');
    },

    "1-2-down": () => {
        document.querySelector('.aboutme').classList.add('fadeDown2');
        document.querySelector('.aboutinfo').classList.add('fadeDown2');
        document.querySelector('.darkcube2').classList.add('ObjDown2');

        document.querySelector('.experience').classList.add('expFadeUp');

        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconUp');
        });
    },

    "2-1-up": () => {
        document.querySelector('.aboutme').classList.add('fadeUp2');
        document.querySelector('.aboutinfo').classList.add('fadeUp2');

        document.querySelector('.experience').classList.add('expFade');
        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconFade');
        });
    },

    "2-3-down": () => {
        document.querySelectorAll('.skillIcons').forEach(el => {
            el.classList.add('iconUp2');
        });
        document.querySelector('.experience').classList.add('expFadeUp2');

        document.querySelector('.slide1 h1').classList.add('slide1Enter');
        document.querySelector('.slide1 p').classList.add('slide1Enter');
        document.querySelector('.slide1 a').classList.add('slide1Enter');

    },

    "3-2-up": () => {

        document.querySelector('.slide1 h1').classList.add('slide1Leave2');
        document.querySelector('.slide1 p').classList.add('slide1Leave2');
        document.querySelector('.slide1 a').classList.add('slide1Leave2');


        document.querySelectorAll('.skillIcons').forEach(el => {
            void el.offsetWidth;
            el.classList.add('iconFadeIn');
        });
    },
    "3-4-down": () => {
        document.querySelector('.slide1 h1').classList.add('slide1Leave');
        document.querySelector('.slide1 p').classList.add('slide1Leave');
        document.querySelector('.slide1 a').classList.add('slide1Leave');
        document.querySelector('.darkromb').classList.add('Objslide2Left');
        document.querySelector('.darkcube1').classList.add('Objslide2Left');
        document.querySelector('.earthcon').classList.add('earthAppear');
        document.querySelector('.contactInfo').classList.add('conEnter');
    },
    "4-3-up": () => {
        document.querySelector('.slide1 h1').classList.add('slide1Again');
        document.querySelector('.slide1 p').classList.add('slide1Again');
        document.querySelector('.slide1 a').classList.add('slide1Again');
        document.querySelector('.darkromb').classList.add('Objslide2romb');
        document.querySelector('.earthcon').classList.add('earthDown');
        document.querySelector('.contactInfo').classList.add('conUpward');
        document.querySelector('.whitecube1').classList.add('Objwhite');
    },
    "4-1-up": () => {
        document.querySelector('.slide1 h1').classList.add('slide1Again');
        document.querySelector('.slide1 p').classList.add('slide1Again');
        document.querySelector('.slide1 a').classList.add('slide1Again');
        document.querySelector('.darkromb').classList.add('Objslide2romb');
        document.querySelector('.earthcon').classList.add('earthDown');
        document.querySelector('.contactInfo').classList.add('conUpward');
        document.querySelector('.whitecube1').classList.add('Objwhite');

    }


};



function resetAnimations() {

    document.querySelector('.aboutme')?.classList.remove(
        'fadeUp', 'fadeDown', 'fadeUp2', 'fadeDown2'
    );
    document.querySelector('.aboutinfo')?.classList.remove(
        'fadeUp', 'fadeDown', 'fadeUp2', 'fadeDown2'
    );
    document.querySelector('.darkcube2')?.classList.remove('ObjDown', 'ObjDown2');
    document.querySelector('.purpleromb2')?.classList.remove('moveUpr2');

    document.querySelector('.experience')?.classList.remove(
        'expFadeUp', 'expFade', 'expFadeUp2'
    );
    document.querySelectorAll('.skillIcons').forEach(el => {
        el.classList.remove('iconUp', 'iconFade', 'iconUp2', 'iconFadeIn');
    });
    document.querySelector('.slide1 h1').classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    document.querySelector('.slide1 p').classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    document.querySelector('.slide1 a').classList.remove('slide1Enter', 'slide1Leave', 'slide1Again', 'slide1Left', 'slide1Right', 'slide1Leave2');
    document.querySelector('.sphereSm').classList.remove('ballsLeft');
    document.querySelector('.sphereMd').classList.remove('ballsLeft');
    document.querySelector('.sphereLg').classList.remove('ballsLeft');
    document.querySelector('.con1').classList.remove('slide2Right');
    document.querySelector('.con2').classList.remove('slide2Right');
    document.querySelector('.MsLogo').classList.remove('LogoRight');
    document.querySelector('.darkromb').classList.remove('Objslide2Left');
    document.querySelector('.darkcube1').classList.remove('Objslide2Left');
    document.querySelector('.con1').classList.remove('slide2Left');
    document.querySelector('.con2').classList.remove('slide2Left');
    document.querySelector('.darkromb').classList.remove('Objslide2romb');
    document.querySelector('.earthcon').classList.remove('earthAppear');
    document.querySelector('.contactInfo').classList.remove('conEnter');
    document.querySelector('.earthcon').classList.remove('earthDown');
    document.querySelector('.contactInfo').classList.remove('conUpward');
    document.querySelector('.whitecube1').classList.remove('Objwhite');





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
            resetAnimations();
            return;
        }

        if (origin.index === 3) {

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

        inProjects = false;
        navScroll.classList.remove(
            "hovertonav1", "hovertonav2", "hovertonav3", "hovertonav4", "hovertonav5"
        );
        navScroll.classList.add(`hovertonav${destination.index + 1}`);



        resetAnimations();

        const key = `${origin.index}-${destination.index}-${direction}`;
        const animate = sectionAnimations[key];
        if (animate) animate();

    },
    onSlideLeave: function (section, origin, destination, direction) {
        if (window.innerWidth <= 992 || document.documentElement.classList.contains('fp-responsive')) {
             resetAnimations();
            return;
            
        }
        resetAnimations();
        if (section.index === 3) {

            if (origin.index === 0 && destination.index === 1) {
                document.querySelector('.slide1 h1').classList.add('slide1Left');
                document.querySelector('.slide1 p').classList.add('slide1Left');
                document.querySelector('.slide1 a').classList.add('slide1Left');

                document.querySelector('.sphereSm').classList.add('ballsLeft');
                document.querySelector('.sphereMd').classList.add('ballsLeft');
                document.querySelector('.sphereLg').classList.add('ballsLeft');



                document.querySelector('.con1').classList.add('slide2Right');
                document.querySelector('.con2').classList.add('slide2Right');
                document.querySelector('.MsLogo').classList.add('LogoRight');
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
        lightIntensity: 1.1,
        ambientIntensity: 0.25,
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
const scrollBtnText = scrollBtn.childNodes[scrollBtn.childNodes.length - 1];
const scrollBtnSvg = scrollBtn.querySelector('svg');


scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const current = fullpage_api.getActiveSection().index;
    const totalSections = 5;

    if (current === totalSections - 1) {

        fullpage_api.moveTo(1);
    } else {

        fullpage_api.moveSectionDown();
    }
});



const contact = document.querySelector(".earthcon");

const Observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        scrollBtn.setAttribute("href", "#hero");
        document.querySelector('.scrollDown').classList.add("scrollUp");
        document.querySelector('.scrollDown').innerHTML = `
    Back to Top
    <svg class="arrowabt" xmlns="http:
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-chevron-right preview-icon">
                    <path d="m9 18 6-6-6-6" />
                </svg>
    `;
        if (window.innerWidth > 992 && !document.documentElement.classList.contains('fp-responsive')) {
            document.querySelector('.aboutme')?.classList.add('fadeDown');
            document.querySelector('.aboutinfo')?.classList.add('fadeDown');
            document.querySelector('.darkcube2')?.classList.add('ObjDown');
            document.querySelector('.purpleromb2')?.classList.add('moveUpr2');
            document.querySelector('.heroContent').style.transform = "translateY(0px)";
            document.querySelector('.Workstation').style.transform = "translateY(0px)";
            document.querySelector('.purpleromb1')?.classList.remove('moveUp');
        }
    } else {
        scrollBtn.setAttribute("href", "");
        document.querySelector('.scrollDown').classList.remove("scrollUp");

        document.querySelector('.scrollDown').innerHTML = `
    
    <svg class="arrowabt" xmlns="http:
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-chevron-right preview-icon">
                    <path d="m9 18 6-6-6-6" />
                </svg>
                Scroll Down
    `;

    }



}, {})

Observer.observe(contact);