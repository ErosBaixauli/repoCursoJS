'use strict';
const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STR_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function counterAttack(){
    const initialPlayerHP = currentPlayerHealth;
    currentPlayerHealth -= dealPlayerDamage(MONSTER_ATTACK_VALUE);
    if(currentPlayerHealth<=0){
        if (hasBonusLife){
            hasBonusLife=false;
            removeBonusLife();
            currentPlayerHealth=initialPlayerHP;
            setPlayerHealth(initialPlayerHP);
            alert('You almost die!')
        }else{
            alert('You are dead...');
        }
    }
}

function reset(){
    currentMonsterHealth=currentPlayerHealth=chosenMaxLife;
    resetGame(chosenMaxLife);
}

function performAttack(type){
    const damage = (type==='normal') ? PLAYER_ATTACK_VALUE : PLAYER_STR_ATTACK_VALUE;
    if (currentMonsterHealth>0 && currentPlayerHealth>0){
        currentMonsterHealth -= dealMonsterDamage(damage);
        if (currentMonsterHealth <= 0){
            alert('You win!');
        }else{
            counterAttack();
        }
    }else{
        alert('Fight is over!');
    }
}

function attackHandler(){
    performAttack('normal');
}

function StrongAttackHandler(){
    performAttack('strong');
}

function healHandler(){
    if(currentPlayerHealth>0){
        let healValue = (currentPlayerHealth+HEAL_VALUE>chosenMaxLife) ? chosenMaxLife-currentPlayerHealth : HEAL_VALUE;
        //alert (healValue);
        increasePlayerHealth(healValue);
        currentPlayerHealth += healValue;
        counterAttack();
    }else{
        alert("Dead bodies can't perform healing magic...")
    }
    
}
attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',StrongAttackHandler);
healBtn.addEventListener('click',healHandler);
resetBtn.addEventListener('click',reset);