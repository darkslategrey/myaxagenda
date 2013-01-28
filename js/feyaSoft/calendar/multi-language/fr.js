/**
 * CubeDrive MyCalendar
 * Copyright(c) 2006-2012, FeyaSoft Inc. All right reserved.
 * info@cubedrive.com
 * http://www.cubedrive.com
 *
 * Please read license first before your use myCalendar, For more detail
 * information, please can visit our link: http://www.cubedrive.com/myCalendar
 *
 * You need buy one of the Feyasoft's License if you want to use MyCalendar in
 * your commercial product. You must not remove, obscure or interfere with any
 * FeyaSoft copyright, acknowledgment, attribution, trademark, warning or
 * disclaimer statement affixed to, incorporated in or otherwise applied in
 * connection with the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Ext.ns("Ext.ux.calendar");

Ext.ux.calendar.Language = {

    // please help to transfer words after :. Thanks
    'CalendarWin':{
        'title':'CubeDrive MyCalendar 2.5.3',
        'loadMask.msg':'S\'il vous plaît patienter...'
    },

    'MainPanel':{
        'loadMask.msg':'S\'il vous plaît patienter...'
    },

    'CalendarContainer':{
        'todayBtn.text':'Aujourd\'hui',
        'dayBtn.text':'La vue Jour',
        'weekBtn.text':'Vue de la semaine',
        'monthBtn.text':'Vue par mois',
        'weekMenu.showAll.text':'Voir tout',
        'weekMenu.onlyWeek.text':'Seulement la semaine',
        'monthMenu.showAll.text':'Voir tout',
        'monthMenu.onlyWeek.text':'Seulement la semaine',
        'moreMenu.setting.text':'Paramètre',
        'moreMenu.about.text':'About CubeDrive MyCalendar',
        'moreBtn.text':'Plus',
        'searchCriteria.text':'Recherche',        
        'moreMenu.showAlert.text':'Activer fonction d\'alerte',
        'moreMenu.language.text':'Règlage de la Langue'
    },

    'WestPanel':{
        'myCalendarPanel.title':'Ax Agenda',
        'myShowAllBtn.text':'Voir tout',
        'myAddBtn.text':'Nouveau'
    },

    'EventHandler':{
        'showOnlyItem.text':'Voir ce que',
        'viewItem.hide.text':'Masquer le calendrier',
        'viewItem.show.text':'Afficher le calendrier',
        'editItem.text':'Modification du calendrier',
        'deleteItem.text':'Supprimer l\'agenda',
        'clearItem.text':'Vider le calendrier',
        'wholeDay':'Journée entière',
        'untitled':'Sans tître',
        'unlockItem.text':'Vérouiller',
        'lockItem.text':'Dévérouiller',
        'editEvent.title':'Modifier un évènement',
        'deleteEvent.title':'Supprimer l\'évènement',
        'more':'Plus',
        'deleteRepeatPopup.title':'Confirmation',
        'deleteRepeatPopup.msg':'Cliquez "Oui" pour supprimer tous les évènements récurrants, ou cliquez "Non" pour ne supprimer que cet évènement?',
        'updateRepeatPopup.title':'Confirmation',
        'updateRepeatPopup.msg':'Cliquez "Oui" pour mettre à jour tous les évènements récurrants, ou cliquez "Non" pour ne mettre à jour que cet évènement?'
    },

    'Editor':{
        'startDayField.label':'Heure',
        'wholeField.label':'Journée entière',
        'subjectField.label':'Sujet',
        'contentField.label':'Contenu',
        'calendarField.label':'Calendrier',
        'alertCB.label':'Alerte lorsque activé',
        'lockCB.label':'Vérouillé',
        'deleteBtn.text':'Supprimer',
        'saveBtn.text':'Sauver',
        'cancelBtn.text':'Annuler',
        'new.title':'Nouvel évènement',
        'edit.title':'Modifier un évènement',
        'repeatTypeField.label':'Récurrence',
        'repeatIntervalField.label':'Tous les jours',
        'intervalUnitLabel.day.text':' Jour(s) ',
        'intervalUnitLabel.week.text':' Semaine(s) ',
        'intervalUnitLabel.month.text':' Mois ',
        'intervalUnitLabel.year.text':' Année(s) ',
        'detailSetting':'Editer les détails ...',
        'returnBtn.text':'Retour',
        'startAndEnd':'Début et fin',
        'repeatStartField.label':'Début',
        'repeatNoEndRG.label':'Pas de date de fin',
        'repeatEndTimeRG.label':'Finit après',
        'repeatEndDateRG.label':'Finit par',
        'repeatEndTimeUnit':'occurrence(s)',
        'weekCheckGroup.label':'Toute les semaines',
        'monthRadioGroup.label':'Répéter par',
        'repeatByDate':'Date',
        'repeatByDay':'Jour',
        'alertLabel':'Configuration des rappels',
        'alertEarly.label':'Avant',
        'newAlertBtn.text':'Nouvelle alerte',
        'deleteAlertBtn.label':'Supprimer alerte',
        'emailAlertEarlyInvalid':'L\'alerte par couriel doît précéder l\'évènement d\'au moins 30 minutes.',
        'popupAlertEarlyInvalid':'L\'alerte par fenêtre surgissante doît précéder de moins de 24 heures le début de l\'évènement.',
        'repeatIntervalInvalid':'Cette valeur doît être un entier positif !',
        'repeatBeginDayInvalid':'La date de début doît être antèrieure à la date de fin',
        'repeatEndDayInvalid':'La date de fin doît être postèrieure à la date de début',
        'repeatTimeInvalid':'Cette valeur doît être un entier positif !',
    },
    
    'CalendarEditor':{
        'new.title':'Nouveau Calendrier',
        'edit.title':'Modifier l\'agenda',
        'nameField.label':'Nom',
        'descriptionField.label':'Description',
        'clearBtn.text':'Clair',
        'saveBtn.text':'Sauver',
        'cancelBtn.text':'Annuler'
    },
    
    'ExpirePopup':{
        'hideCB.label':'Ne plus faire apparaître la fenêtre surgissante',
        'title':'Alertes d\'évènements',
        'tpl.calendar':'Calendrier',
        'tpl.subject':'Sujet',
        'tpl.content':'Contenu',
        'tpl.leftTime':'Temps restant',
        'hour':'Heure(s)',
        'minute':'Minute(s)',
        'untitled':'Sans tître',
        'noContent':'Pas de contenu'
    },

    'SettingPopup':{
        'title':'Propriétés Ax Agenda',
        'hourFormatField.label':'Format de l\'heure',
        'dayFormatField.label':'Format vue jour',
        'weekFormatField.label':'Format vue semaine',
        'monthFormatField.label':'Format vue mois',
        'applyBtn.text':'Appliquer',
        'resetBtn.text':'Annuler',
        'closeBtn.text':'Fermer',
        'fromtoFormatField.label':'De à format',
        'scrollStartRowField.label':'Scroll Start Row',
        'languageField.label':'Langue',
        'generalForm.title':'General',
        'dwViewForm.title':'Vue jour|Vue semaine',
        'monthViewForm.title':'Vue mois',
        'createByDblClickField.label':'Création d\'un évènement par double clique',
        'singleDayField.label':'Cross Day Event',
        'weekStartDayField.label': 'Jour de début de semaine',
        'activeStartTimeField.label':'Horaire de début d\'activité',
        'activeEndTimeField.label':'Horaire de fin d\'activité',
        'hideInactiveTimeField.label':'Caché les plages horaires innactives',
        'readOnlyField.label':'Lecure seule',
        'intervalField.label':'Interval',
        'startEndInvalid':'Horaire de début doît être antèrieur à l\'horaire de fin',
        'formatInvalid':'Example: 09:00',
        'initialViewField.label':'Vue initiale'
    },

    'ResultView':{
        'cm.date':'Date',
        'cm.calendar':'Agenda',
        'cm.time':'Heure',
        'cm.subject':'Sujet',
        'cm.content':'Contenu',
        'cm.expire':'Temps restant',
        'groupBtn.group.text':'Grouper',
        'groupBtn.unGroup.text':'Dégrouper',
        'returnBtn.text':'Retour',
        'hour':'Heure(s)',
        'noSubject':'(Pas de sujet)',
        'noContent':'(Pas de contenu)',
        'loadMask.msg':'S\'il vous plaît patienter...'
    },

    'DayView':{
        'loadMask.msg':'S\'il vous plaît patienter...',
        'addItem.text':'Nouvel événement',
        'events':'événement'
    },

    'MonthView':{
        'loadMask.msg':'S\'il vous plaît patienter...',
        'overview':'Présentation',
        'showingEvents':'Monter les évènements',
        'totalEvents':'Total des évènements',
        'dayPre':'',
        'addItem.text':'Nouvel événement',
        'clearItem.text':'Propreté de l\'événement',
        'cutItem.text':'Couper',
        'copyItem.text':'Copier',
        'pasteItem.text':'Coller',
        'events':'événement'
    },

    'Mask':{
        '12Hours':'12 Heures',
        '24Hours':'24 Heures',
        'ar': 'Arabic',
        'de': 'German',
        'en':'American English',
        'es': 'Spanish',
        'fr': 'Français',
        'it': 'Italiano',
        'ja': 'Japanese',
        'lt': 'Lietuvių',
        'nl': 'Nederlandse',
        'pl': 'Polski',
        'pt': 'Portuguese',
        'ru': 'Russian',
        'zh_CN':'简体中文',
        'enable':'Activé',
        'disable':'Désactivé',
        'minute':'Minutes',
        'monday':'Lundi',
        'sunday':'Dimanche',
        'permitData':[
            [0, 'Lecture, Ecrire and Partager'],
            [1, 'Lecture and Ecrire'],
            [2, 'Lecture seule']
        ],
        'alertType':[
            ['popup', 'Message surgissant'],
            ['email', 'Couriel']
        ],
        'popupAlertUnit':[
            ['minute', 'Minute(s)'],
            ['hour', 'Heure(s)']
        ],
        'alertUnit':[
            ['minute', 'Minute(s)'],
            ['hour', 'Heure(s)'],
            ['day', 'Jour(s)'],
            ['wek', 'Semaine(s)']
        ],
        'initialView':[
            [0, 'Vue jour'],
            [1, 'Vue semaine'],
            [2, 'Vue mois']
        ]
    },

    repeatType:[
        ['no', 'Non répété'],
        ['day', 'Quotitien'],
        ['week', 'Hebdomadaire'],
        ['month', 'Mensuel'],
        ['year', 'Annuel']
    ],

    getWeekDayInMonth:function(date){
        var d = Ext.Date.format(date,'d');
        var w = Math.floor(d/7)+1;
        var wd =Ext.Date.format(date,'l');
        var str = 'le '+w;
        // if(1 == w){
        //     str += '';
        // }else if(2 == w){
        //     str += 'nd';
        // }else if(3 == w){
        //     str += 'rd';
        // }else{
        //     str += 'th';
        // }
        return str+' '+wd;
    },

    getIntervalText:function(rtype, intervalSlot){
        var str = '';
        if('day' == rtype){
            if(1 == intervalSlot){
                str = 'Tous les jours';
            }else{
                str = 'Tous les '+intervalSlot+' jours';
            }
        }else if('week' == rtype){
            if(1 == intervalSlot){
                str = 'Toutes les semaines à ';
            }else{
                str = 'Toutes les '+intervalSlot+' semaines à ';
            }
        }else if('month' == rtype){
            if(1 == intervalSlot){
                str = 'Tous les mois à ';
            }else{
                str = 'Tous les '+intervalSlot+' mois à ';
            }
        }else if('year' == rtype){
            if(1 == intervalSlot){
                str = 'Tous les ans à ';
            }else{
                str = 'Tous les '+intervalSlot+' ans à ';
            }
        }
        return str;
    }
};

Ext.apply(Ext.ux.calendar.Mask, Ext.ux.calendar.Language);