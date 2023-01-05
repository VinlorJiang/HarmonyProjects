package ohos.samples.bttest;

import ohos.aafwk.content.Intent;
import ohos.aafwk.content.IntentParams;
import ohos.ace.ability.AceAbility;
import ohos.global.configuration.Configuration;
import ohos.utils.PacMap;

public class MainAbility2 extends AceAbility {

    @Override
    public void onStart(Intent intent) {
        setInstanceName("MainAbility2");
        super.onStart(intent);
    }

    @Override
    public void onStop() {
        super.onStop();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }

    @Override
    public void onBackground() {
        super.onBackground();
    }

    @Override
    public boolean onStartContinuation() {
        return super.onStartContinuation();
    }

    @Override
    public boolean onSaveData(IntentParams saveData) {
        return super.onSaveData(saveData);
    }

    @Override
    public void onCompleteContinuation(int code) {
        super.onCompleteContinuation(code);
    }

    @Override
    public boolean onRestoreData(IntentParams restoreData) {
        return super.onRestoreData(restoreData);
    }

    @Override
    public void onRemoteTerminated() {
        super.onRemoteTerminated();
    }

    @Override
    public void onSaveAbilityState(PacMap outState) {
        super.onSaveAbilityState(outState);
    }

    @Override
    public void onRestoreAbilityState(PacMap outState) {
        super.onRestoreAbilityState(outState);
    }

    @Override
    public void onInactive() {
        super.onInactive();
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
    }

    @Override
    public void onMemoryLevel(int level) {
        super.onMemoryLevel(level);
    }
}
