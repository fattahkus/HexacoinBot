import fetch from "node-fetch";
import { Twisters } from "twisters";
import delay from 'delay'
import moment from 'moment';
import dotenv from "dotenv";
dotenv.config();

const getToken = (user_id,username) =>
    new Promise((resolve, reject) => {
      fetch('https://ago-api.onrender.com/api/app-auth', {
        method: 'POST',
        headers: {
          'Host': 'ago-api.onrender.com',
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Sec-Fetch-Site': 'cross-site',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          'Sec-Fetch-Mode': 'cors',
          'Origin': 'https://ago-wallet.hexacore.io',
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
          'Referer': 'https://ago-wallet.hexacore.io/',
          'Content-Length': '49',
          'Sec-Fetch-Dest': 'empty'
        },
        body: JSON.stringify({
          'user_id': user_id,
          'username': username
        })
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const getReferral = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://ago-api.onrender.com/api/total-passive", {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": bearer,
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\", \"Microsoft Edge WebView2\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://ago-wallet.hexacore.io/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const getRegister = (bearer,user_id,username,fullName,referer_id) => 
    new Promise((resolve, reject) => {
      fetch('https://ago-api.onrender.com/api/create-user', {
        // fetch('https://hexacore-tg-api.onrender.com/api/create-user', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'authorization': bearer,
          'content-type': 'application/json',
          'origin': 'https://ago-wallet.hexacore.io',
          'priority': 'u=1, i',
          'referer': 'https://ago-wallet.hexacore.io/',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({
          'user_id': user_id,
          'fullname': fullName,
          'username': username,
          'referer_id': referer_id
        })
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
 })

const checkBalance = (bearer,user_id) =>
    new Promise((resolve, reject) => {
      fetch(`https://ago-api.onrender.com/api/balance/${user_id}`, {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": bearer,
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\", \"Microsoft Edge WebView2\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://ago-wallet.hexacore.io/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const getDailyRewards = (bearer,user_id) =>
    new Promise((resolve, reject) => {
      fetch(`https://ago-api.onrender.com/api/reward-available/${user_id}`, {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "authorization": bearer,
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://ago-wallet.hexacore.io/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const claimDailyRewards = (bearer,user_id) =>
    new Promise((resolve, reject) => {
        fetch("https://ago-api.onrender.com/api/daily-reward", {
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
            "authorization": bearer,
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://ago-wallet.hexacore.io/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: `{\"user_id\":${user_id}}`,
        method: "POST"
        })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const checkTaps = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://ago-api.onrender.com/api/available-taps", {
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
            "authorization": bearer,
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://ago-wallet.hexacore.io/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
        })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const coinTaps = (bearer,totalTaps) =>
    new Promise((resolve, reject) => {
      fetch("https://ago-api.onrender.com/api/mining-complete", {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "authorization": bearer,
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://ago-wallet.hexacore.io/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: `{\"taps\":${totalTaps}}`,
        method: "POST"
      })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const levelInfo = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://ago-api.onrender.com/api/level", {
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
            "authorization": bearer,
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://ago-wallet.hexacore.io/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
        })
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

const levelUpgrade = (bearer) =>
  new Promise((resolve, reject) => {
    fetch("https://ago-api.onrender.com/api/upgrade-level", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": bearer,
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\", \"Microsoft Edge WebView2\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://ago-wallet.hexacore.io/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      body: null,
      method: "POST"
    })
      .then((res) => res.clone().json().catch(() => res.text()))
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          reject(err);
      });
});

const getMissions = (bearer) =>
  new Promise((resolve, reject) => {
    fetch("https://ago-api.onrender.com/api/missions", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": bearer,
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\", \"Microsoft Edge WebView2\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://ago-wallet.hexacore.io/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      body: null,
      method: "GET"
    })
      .then((res) => res.clone().json().catch(() => res.text()))
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          reject(err);
      });
});

const claimMission = (bearer,missionId) =>
  new Promise((resolve, reject) => {
    fetch("https://ago-api.onrender.com/api/mission-complete", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": bearer,
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\", \"Microsoft Edge WebView2\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://ago-wallet.hexacore.io/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      body: `{\"missionId\":${missionId}}`,
      method: "POST"
    })
      .then((res) => res.clone().json().catch(() => res.text()))
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          reject(err);
      });
});

const getMembersBot = (botsToken) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.telegram.org/${botsToken}/getUpdates`, {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "cache-control": "max-age=0",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET"
    })
      .then((res) => res.clone().json().catch(() => res.text()))
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          reject(err);
      });
});

(async () => {
  const twisters = new Twisters();
    while (true) {
        const botsToken = process.env.BOTS_TOKEN
        const referer_id = process.env.REFERRAL
        const getMembersBots = await getMembersBot(botsToken)
        const dataMembersBots = getMembersBots.result
        await Promise.all(
          dataMembersBots.map(async (element) => {
            try{
                const user_id = element.message.from.id
                var username = element.message.from.username ?? 'user'
                const first_name = element.message.from.first_name
                const last_name = element.message.from.last_name ?? ''
                const fullName = `${first_name.replace(/\s+/g, '')} ${last_name.replace(/\s+/g, '')}`
                const getAuth = await getToken(user_id, username)
                const token = getAuth.token

                const getRegisters = await getRegister(token,user_id,username,fullName,referer_id) 
                const checkBalances = await checkBalance(token,user_id)
                const getReferrals = await getReferral(token)
                const levelInfos = await levelInfo(token)
                const getDailyRewardss = await getDailyRewards(token,user_id)
                const checkTapss = await checkTaps(token)
                const getMissionss = await getMissions(token)

                if(getRegisters.message === 'User created with referral' || getRegisters.error === 'User already exists'){
                  if(getDailyRewardss.success === true){
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily Rewards available, trying to claim...`});
                    const claimDailyRewardss = await claimDailyRewards(token,user_id)
                    if(claimDailyRewardss.tokens){
                      twisters.put(username, {
                        text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily Rewards claimed ${claimDailyRewardss.tokens}...`});
                    }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily ${claimDailyRewardss.error}...`});
                    }
                  }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily Rewards not available...`});
                  }

                  getMissionss.forEach(async (element) => {
                    const idTask = element.id
                    const statusTask = element.isCompleted
                    const titleTask = element.description

                    if(statusTask === false){
                      let claimMissions = await claimMission(token,idTask)
                        if(claimMissions.success === true){
                            twisters.put(username, {
                              text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | MissionId : ${idTask} missionName : ${titleTask} has been completed...`});
                        }else if(claimMissions.success === false){
                            twisters.put(username, {
                              text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | MissionId : ${idTask} missionName : ${titleTask} can't completed...`});
                            claimMissions = await claimMission(token,idTask)
                            if(claimMissions.success === true){
                                twisters.put(username, {
                                  text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | MissionId : ${idTask} missionName : ${titleTask} has been completed...`});
                            }
                        }else{
                          console.log(`[${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | MissionId : ${idTask} missionName : ${titleTask} can't completed...`)
                        }
                    }
                  })
  
                  if(levelInfos.upgrade_available === true && checkBalances.balance > levelInfos.upgrade_price){
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Have enough coins, trying to upgrade...`});
                    const levelUpgrades = await levelUpgrade(token)
                    if(levelUpgrades.success === true){
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Success Upgrades to level ${levelUpgrades.next_lvl}...`});
                    }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Failed Upgrades to level ${levelUpgrades.next_lvl}...`});
                    }
                  }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Don't have enough coins to upgrade...`});
                  }
  
                  if(checkTapss.available_taps > 0){
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily Taps available ${checkTapss.available_taps}, trying to claim...`});
                    const coinTapss = await coinTaps(token,checkTapss.available_taps)
                    if(coinTapss.success === true){
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Success Daily Taps ${checkTapss.available_taps}...`});
                    }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Failed Daily Taps ${checkTapss.available_taps}...`});
                    }
                  }else{
                    twisters.put(username, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] Main balance ${checkBalances.balance} Level ${levelInfos.lvl} Referral ${getReferrals.first_referrals}:${getReferrals.total_passive_income} | Daily Taps not available yet...`});
                  }
                }else{
                  twisters.put(username, {
                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${username}] User is not registered yet [=> Name ${fullName} | UserId ${user_id} <=], please register first on https://t.me/HexacoinBot...`});
                }

            } catch (e) {
                // console.log(e)
                twisters.put(username, {
                  text: `[${moment().format("DD/MM/YY HH:mm:ss")}] Internal Server Error...`});
            } 
        }))       
    }
})();