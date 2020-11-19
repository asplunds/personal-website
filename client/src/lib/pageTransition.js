export default {
    // start in a transparent, upscaled state
    atEnter: {
    opacity: 0,
    scale: 20,
    zIndex: 2
},
    // leave in a transparent, downscaled state
    atLeave: {
    opacity: 0,
    scale: -20,
    zIndex: 1
},
    // and rest at an opaque, normally-scaled state
    atActive: {
    opacity: 1,
    scale: 0,
    zIndex: 2
},
};