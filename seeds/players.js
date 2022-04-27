exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {
      id: 1,
      name: 'Cristiano Ronaldo',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCristiano_Ronaldo&psig=AOvVaw0Wl_2nmAGU5pmX79hbCqPT&ust=1651110617754000&source=images&cd=vfe&ved=2ahUKEwiQlI_AkLP3AhWxXmwGHeA_BR0QjRx6BAgAEAs',
    },
    {
      id: 2,
      name: 'Bukayo Saka',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fbukayo-saka&psig=AOvVaw2At_HVVt7hclz61lr-bGxE&ust=1651110700898000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiCy--Qs_cCFQAAAAAdAAAAABAZ',
    },
    {
      id: 3,
      name: 'Gabriel Martinelli',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fgabriel-martinelli&psig=AOvVaw1yBj37GXnl08V5bgkiyZPs&ust=1651110962653000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMC4oOmRs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 4,
      name: 'Mohamed Elneny',
      position: 'Midfield',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fmohamed-elneny&psig=AOvVaw3uQdNi8nQCs0kS5mqQoFCx&ust=1651111024735000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODRwoiSs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 5,
      name: 'Thomas Partey',
      position: 'Midfield',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fthomas-partey&psig=AOvVaw3C5JklythLb5K2GNbACt5Z&ust=1651111089346000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPj4iKSSs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 6,
      name: 'Martin Odegaard',
      position: 'Midfield',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.si.com%2Fsoccer%2F2021%2F08%2F18%2Fmartin-odegaard-transfer-arsenal-real-madrid&psig=AOvVaw3CbgNAio4gMN_-zR28s8tb&ust=1651111165601000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLid5M6Ss_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 7,
      name: 'Gabriel Martinelli',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fgabriel-martinelli&psig=AOvVaw1yBj37GXnl08V5bgkiyZPs&ust=1651110962653000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMC4oOmRs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 8,
      name: 'Kieran Tierney',
      position: 'Defence',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthecelticbhoys.com%2F2021%2F06%2F13%2Fkieran-tierney-celtic-exit-claim-lennon%2F&psig=AOvVaw0aOdfSK1CATYTBU7Wz1nom&ust=1651111468696000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPi7ntiTs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 9,
      name: 'Gabriel',
      position: 'Defence',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmetro.co.uk%2F2022%2F04%2F14%2Farsenal-news-gabriel-speaks-out-future-barcelona-transfer-links-16465133%2F&psig=AOvVaw2JhnOsyYVifioekBF4fonz&ust=1651111575731000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiy14yVs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 10,
      name: 'William Saliba',
      position: 'Defence',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fgrahamruthven%2F2022%2F03%2F29%2Farsenal-must-give-william-saliba-a-chance-to-prove-himself-next-season%2F&psig=AOvVaw2MfEKyqVJJC3J1D87GAqiy&ust=1651111952989000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOivuMKVs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 11,
      name: 'Gianluigi Buffon',
      position: 'Keeper',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm2308807%2F&psig=AOvVaw09KLWdKqUcwdVy_sV2madH&ust=1651112246487000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCos8uWs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 12,
      name: 'Aaron Ramsdale',
      position: 'Keeper',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Faaron-ramsdale&psig=AOvVaw3d_CBcFNjQnKcmyeufeazh&ust=1651112112546000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCfk4yWs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 13,
      name: 'David Beckham',
      position: 'Midfield',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2Fgallery%2F2013%2Fmay%2F17%2Fdavid-beckham-hairstyles-pictures&psig=AOvVaw2_GE5hdZeb-05iM_2d-AuW&ust=1651112404191000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDPoJaXs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 14,
      name: 'Thierry Henry',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hitc.com%2Fen-gb%2F2021%2F12%2F29%2Fphoto-16-goal-arsenal-target-spotted-wearing-thierry-henry-shirt-at-airport-arteta-is-keen%2F&psig=AOvVaw3M88thYsLLDGiSHo0bWoAr&ust=1651112453783000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCb3q-Xs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 15,
      name: 'Fernando Torres',
      position: 'Attack',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eurosport.com%2Ffootball%2Fpremier-league%2F2012-2013%2Fpaper-round-liverpool-s-incredible-swoop-to-re-sign-fernando-torres_sto4511896%2Fstory.shtml&psig=AOvVaw3yxPMC7GYcHPRq5ziShplI&ust=1651112565698000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiLt_GXs_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 16,
      name: 'Takehiro Tomiyasu',
      position: 'Defence',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdailycannon.com%2F2022%2F03%2Ftakehiro-tomiyasu-injury-arsenal%2F&psig=AOvVaw2-Z3Zii1gMcPdhujpoU00X&ust=1651112676924000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCW452Ys_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 17,
      name: 'Patrick Vieira',
      position: 'Midfield',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2F2017%2Fjul%2F27%2Fpremier-league-at-25-best-signing-patrick-vieira-arsenal-roy-keane&psig=AOvVaw1CGYVZ_OlMCkxUSP6gPgPn&ust=1651112822856000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICq7N-Ys_cCFQAAAAAdAAAAABAD',
    },
    {
      id: 18,
      name: 'Bacary Sagna',
      position: 'Defence',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.premierleague.com%2Fplayers%2F3311%2Fplayer%2Foverview&psig=AOvVaw0OwmE-ynnBgXWxx4nYudoR&ust=1651113008781000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDZibuZs_cCFQAAAAAdAAAAABAD',
    },
  ])
}
