const IcoBroadcaster = 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1';
const IcoModerator   = 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1';
const IcoVerified    = 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3';
const IcoPrimeGaming = 'https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/1';
const IcoFounder     = 'https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/1';
const IcoSubscriber  = 'https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1';

const client = new tmi.Client({
	options: { debug: false },
    connection: {
        secure: true,
        reconnect: true
    },
	channels: [ 'channel' ] // <-- change this!
});

const MsgElement       = '<div class="message fade"><div>';
const MsgAuthorElement = '<div class="message_author"><div>';
const MsgTextElement   = '<div class="message_text"><div>';

let message_lifetime = 15_000; // (ms) 1 Message lasts 15 seconds.

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    console.log(tags)
    // Create message container
    $('.chatbox').first().append(MsgElement);
    let msg = $('.message').last();

    // Create author div
    msg.append(MsgAuthorElement);
    var author = $('.message_author').last();

    // Badges
    const badges = tags.badges || {};
    console.log(badges);
    const isBroadcaster = badges.broadcaster;
    const isMod = badges.moderator;
    const isVerified = badges.partner;
    const isPrimeGaming = badges.premium;
    
    if (isBroadcaster)
    {
        author.append('<img>');
        $('img').last()
            .attr('src', IcoBroadcaster)
    }
    if (isMod)
    {
        author.append('<img>')
        $('img').last()
            .attr('src', IcoModerator)
    }
    if (isVerified)
    {
        author.append('<img>')
        $('img').last()
            .attr('src', IcoVerified)
    }
    if (isPrimeGaming)
    {
        author.append('<img>')
        $('img').last()
            .attr('src', IcoPrimeGaming)
    }

    const isFounder = badges.founder;
    const isSubscriber = badges.founder;
    if (isFounder)
    {
        author.append('<img>')
        $('img').last()
            .attr('src', IcoFounder)
    }
    else if (isSubscriber)
    {
        author.append('<img>')
        $('img').last()
            .attr('src', IcoSubscriber)
    }

    // Author Text
    author
        .append(tags['display-name'])
        .css('color', tags['color']);

    // Message Text
    msg.append(MsgTextElement);
    $('.message_text').last()
        .append(': ' + message)
    

    // deletion and fade animation
    msg.toggleClass('fade');
    setTimeout(function(){
        msg.toggleClass('fade');
    }, message_lifetime);
    setTimeout(function(){
        msg.remove();
    }, message_lifetime+300);
});
