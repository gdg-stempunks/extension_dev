/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#27AA90" weight=100

namespace emoji {
    //% block
    export function showSmiley(): void {
        basic.showIcon(IconNames.Happy)

    }

    //% block
    export function showHeart(): void {
        basic.showIcon(IconNames.Heart)

    }

    //% block
    export function showSad(): void {
        basic.showIcon(IconNames.Sad)

    }

    //% block
    export function showAngry(): void {
        basic.showIcon(IconNames.Angry)

    }

    //% block
    export function showYes(): void {
        basic.showIcon(IconNames.Yes)

    }

    //% block
    export function showNo(): void {
        basic.showIcon(IconNames.No)

    }

    //% block
    export function showSquare(): void {
        basic.showIcon(IconNames.Square)

    }

    //% block
    export function showDiamond(): void {
        basic.showIcon(IconNames.Diamond)

    }
}
