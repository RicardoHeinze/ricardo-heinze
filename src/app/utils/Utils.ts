export class Utils{
    static lockWindow(): void {
        document.getElementById('body').style.overflowY = 'hidden';
    }

    static unlockWindow(): void {
        document.getElementById('body').style.overflowY = 'auto';
    }
}
