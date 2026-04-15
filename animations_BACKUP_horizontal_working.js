/**
 * STORYTELLING MOTION SYSTEM — JAPAN REVIVAL (CONTINUOUS MOTION v1.0)
 * Unified timeline for seamless circle transitions without hitches.
 */

gsap.registerPlugin(ScrollTrigger);

class MotionSystem {
    constructor() {
        this.circle = document.querySelector('#global-circle');
        this.anchors = {
            hero: document.querySelector('#anchor-hero'),
            about: document.querySelector('#anchor-about'),
            forWho: document.querySelector('#anchor-for-who'),
            whyNow: document.querySelector('#anchor-why-now')
        };
        
        this.config = {
            scrubValue: 1.2,
            easePrimary: "power2.inOut",
            pinDuration: "150%"
        };

        if (this.circle && this.anchors.hero) {
            this.init();
        }
    }

    getAnchorViewportCoords(element) {
        if (!element) return { x: 0, y: 0 };
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    init() {
        // Master Refresh on resize
        window.addEventListener('resize', () => ScrollTrigger.refresh());

        // Initial state - Precise Hero Alignment
        const heroCoords = this.getAnchorViewportCoords(this.anchors.hero);
        gsap.set(this.circle, {
            x: heroCoords.x,
            y: heroCoords.y,
            xPercent: -50,
            yPercent: -50,
            scale: 1,
            opacity: 1,
            zIndex: 5
        });

        this.createContinuousJourney();
        this.setupWhyNowTransition();
    }

    createContinuousJourney() {
        const aboutSection = document.querySelector('#about');
        const forWhoSection = document.querySelector('#for-who');

        // 1. DYNAMIC HORIZONTAL CAROUSEL SETUP
        // We move For Who INSIDE About, and overlay it absolutely.
        // This ensures they share the exact same physical space, completely eliminating vertical scroll issues.
        aboutSection.appendChild(forWhoSection);
        
        gsap.set(aboutSection, { position: "relative", overflow: "hidden" });
        gsap.set(forWhoSection, { 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%",
            zIndex: 10,
            pointerEvents: "none" // Prevent blocking About clicks initially
        });

        // 2. CONTENT SETUP
        const aboutWrappers = aboutSection.querySelectorAll('.about-content, .fuji-image');
        const forWhoWrappers = forWhoSection.querySelectorAll('.for-who-image, .for-who-content');

        // Explicitly kill the CSS vertical .scroll-reveal by overriding y to 0
        gsap.set(aboutWrappers, { opacity: 0, x: 50, y: 0 });
        gsap.set(forWhoWrappers, { opacity: 0, x: 150, y: 0 });

        // 2. HERO TO ABOUT (Arrival & Fade In)
        const arrivalTl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: "top 80%",
                end: "top top",
                scrub: this.config.scrubValue,
                invalidateOnRefresh: true
            }
        });

        // Circle moves to About
        arrivalTl.to(this.circle, {
            x: () => this.getAnchorViewportCoords(this.anchors.about).x,
            y: () => window.innerHeight / 2, 
            scale: 1.2,
            ease: "none"
        }, 0);

        // About Content fades in
        arrivalTl.to(aboutWrappers, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.8
        }, 0.2);

        // 3. ABOUT TO FOR WHO (Pure Horizontal Carousel Handoff)
        const handoffTl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: "center center",
                end: "+=150%", // Extended for smooth cinematic feel
                scrub: true,
                pin: true
            }
        });
        
        // About content EXIT (Fades out and moves LEFT)
        handoffTl.to(aboutWrappers, {
            x: -150,
            opacity: 0,
            stagger: 0.05,
            duration: 1.0,
            ease: "power2.inOut"
        }, 0);

        // Circle Horizontal Glide to For Who
        handoffTl.to(this.circle, {
            x: () => this.getAnchorViewportCoords(this.anchors.forWho).x,
            y: () => window.innerHeight / 2, // Keeps stable Y center
            scale: 1.0,
            duration: 1.5,
            ease: "power2.inOut"
        }, 0);

        // For Who content ENTRY (Fades in and moves LEFT from Right)
        // Enable pointer events now that section is active
        handoffTl.set(forWhoSection, { pointerEvents: "auto" }, 0);

        handoffTl.to(forWhoWrappers, {
            x: 0,
            opacity: 1,
            stagger: 0.2, // Image first, then text
            duration: 1.2,
            ease: "power2.out"
        }, 0.3); // Starts slightly after to let About exit begin

    }

    setupWhyNowTransition() {
        // Separate transition for the final section to keep code modular
        gsap.to(this.circle, {
            scrollTrigger: {
                trigger: "#why-now",
                start: "top bottom",
                end: "top 20%",
                scrub: this.config.scrubValue,
                invalidateOnRefresh: true
            },
            x: () => this.getAnchorViewportCoords(this.anchors.whyNow).x,
            y: () => this.getAnchorViewportCoords(this.anchors.whyNow).y,
            scale: 2.5,
            ease: "power2.inOut"
        });

        const village = document.querySelector('.why-village');
        const whyElements = document.querySelector('#why-now').querySelectorAll('.scroll-reveal:not(.why-village)');

        gsap.timeline({
            scrollTrigger: {
                trigger: "#why-now",
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        })
        .to(whyElements, { opacity: 1, duration: 1 })
        .to(village, { opacity: 1, y: 0, duration: 1.2 }, "-=0.5");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MotionSystem();
});
