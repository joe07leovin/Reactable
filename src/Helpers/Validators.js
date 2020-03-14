export const Validators = [
    //email
    { type: 'Email', expression: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'Invalid Email ID' },
    { type: 'Email', expression: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, message: 'Invalid Email ID' },
    //password
    { type: 'PWDC', expression: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/, message: 'Invalid Data, Expected to have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long' },
    { type: 'PWDM', expression: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/, message: 'Invalid Data, Expected to have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long' },
    //HTTP
    { type: 'Https S', expression: /^[A-Za-z]+$/, message: 'Invalid Data, Expected HTTPS' },
    { type: 'Https O', expression: /^[A-Za-z]+$/, message: 'Invalid Data, Expected HTTP or HTTPS' },
    //Date  
    {
        type: 'Date D', expression: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        , message: 'Invalid Data, Expected in dd-mm-yyyy or dd/mm/yyyy or dd.mm.yyyy'
    },
    {
        type: 'Date M', expression: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        , message: 'Invalid Data, Expected in dd-mmm-yyyy or dd/mmm/yyyy or dd.mmm.yyyy'
    },
    { type: 'Date Y', expression: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, message: 'Invalid Data, Expected in yyyy-mm-dd' },
    //Time  

    { type: 'Time C', expression: /^(0?[1-9]|1[0-2]):[0-5][0-9]$/, message: 'Invalid Data, Expected 12 hour format' },
    { type: 'Time M', expression: /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, message: 'Invalid Data, Expected 12 hour format with meridian' },
    { type: 'Time RD', expression: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, message: 'Invalid Data, Expected 24 hour format' },
    { type: 'Time RC', expression: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, message: 'Invalid Data, Expected 24 hour format with leading 0' },
    { type: 'Time RS', expression: /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/, message: 'Invalid Data, Expected 24 hour format with seconds' },
    //HTML 
    { type: 'HTML Tag', expression: /<\/?[\w\s]*>|<.+[\W]>/, message: 'Invalid Data, Expected valid HTML Data' },
    //Slug
    { type: 'Slug', expression: /^[a-z0-9]+(?:-[a-z0-9]+)*$$/, message: 'Invalid Data, Expected Slug' },
    //Duplicate
    { type: 'String contains duplicate', expression: /(\b\w+\b)(?=.*\b\1\b)/, message: 'Source string has Duplicates' },
    //File
    { type: 'File D', expression: /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/, message: 'Invalid Data, Missing Filename and Extension, Expected valid File Path' },
    { type: 'File O', expression: /^(.+)([^/]+)$/, message: 'Invalid Data, Expected valid File Path' },
    { type: 'File E', expression: /^[\w,\s-]+\.[A-Za-z]{3}$/, message: 'Invalid Data, Expected File with extension restricted to 3 Characters' },
    //Java Script Handlers   
    { type: 'IJSH', expression: /^[A-Za-z]+$/, message: 'Contains inline Java Script Handlers' },
    { type: 'IJSH E', expression: /^[A-Za-z]+$/, message: 'Contains nested inline Java Script Handlers' },
    //Alphabets    
    { type: 'String', expression: /^[A-Za-z]+$/, message: 'Invalid Data, Expected Aphabets' },
    //Numbers
    { type: 'Whole Numbers', expression: /^\d+$/, message: 'Invalid Data, Expected Whole Numbers' },
    { type: 'Decimal Numbers', expression: /^\d*\.\d+$/, message: 'Invalid Data, Expected Decimal Numbers' },
    { type: 'WD Numbers', expression: /^\d*(\.\d+)?$/, message: 'Invalid Data, Expected Whole or Decimal Numbers' },
    { type: 'WDNP Numbers', expression: /^-?\d*(\.\d+)?$/, message: 'Invalid Data, Expected either Whole or Decimal or Positive or Negative Numbers' },
    { type: 'WDF Numbers', expression: /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/, message: 'Invalid Data, Expected Whole or Decimal Numbers or Fractions' },
    { type: 'Alpha Numeric D', expression: /^[a-zA-Z0-9]*$/, message: 'Invalid Data, Expected Alpha Numeric' },
    { type: 'Whole Numeric C', expression: /^[a-zA-Z0-9 ]*$/, message: 'Invalid Data, Expected Alpha Numeric with white spaces' },
    //Generic Date
    { type: 'Date', expression: Date.parse(val), message: 'Invalid Data, Expected Date' },
    //Phone
    {
        type: 'Phone', expression: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
        message: 'Invalid Phone-Number, Expected Phone Number'
    },
    //IP
    {
        type: 'IPAddress', expression: /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/
        , message: 'Invalid IP Address, Expected universal IPV4 or IPV6 Format'
    },
    //Country Code
    {
        type: 'Country Code', expression: /^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW|AFG|ALB|DZA|ASM|AND|AGO|AIA|ATA|ATG|ARG|ARM|ABW|AUS|AUT|AZE|BHS|BHR|BGD|BRB|BLR|BEL|BLZ|BEN|BMU|BTN|BOL|BIH|BWA|BVT|BRA|IOT|VGB|BRN|BGR|BFA|BDI|KHM|CMR|CAN|CPV|CYM|CAF|TCD|CHL|CHN|CXR|CCK|COL|COM|COD|COG|COK|CRI|CIV|CUB|CYP|CZE|DNK|DJI|DMA|DOM|ECU|EGY|SLV|GNQ|ERI|EST|ETH|FRO|FLK|FJI|FIN|FRA|GUF|PYF|ATF|GAB|GMB|GEO|DEU|GHA|GIB|GRC|GRL|GRD|GLP|GUM|GTM|GIN|GNB|GUY|HTI|HMD|VAT|HND|HKG|HRV|HUN|ISL|IND|IDN|IRN|IRQ|IRL|ISR|ITA|JAM|JPN|JOR|KAZ|KEN|KIR|PRK|KOR|KWT|KGZ|LAO|LVA|LBN|LSO|LBR|LBY|LIE|LTU|LUX|MAC|MKD|MDG|MWI|MYS|MDV|MLI|MLT|MHL|MTQ|MRT|MUS|MYT|MEX|FSM|MDA|MCO|MNG|MSR|MAR|MOZ|MMR|NAM|NRU|NPL|ANT|NLD|NCL|NZL|NIC|NER|NGA|NIU|NFK|MNP|NOR|OMN|PAK|PLW|PSE|PAN|PNG|PRY|PER|PHL|PCN|POL|PRT|PRI|QAT|REU|ROU|RUS|RWA|SHN|KNA|LCA|SPM|VCT|WSM|SMR|STP|SAU|SEN|SCG|SYC|SLE|SGP|SVK|SVN|SLB|SOM|ZAF|SGS|ESP|LKA|SDN|SUR|SJM|SWZ|SWE|CHE|SYR|TWN|TJK|TZA|THA|TLS|TGO|TKL|TON|TTO|TUN|TUR|TKM|TCA|TUV|VIR|UGA|UKR|ARE|GBR|UMI|USA|URY|UZB|VUT|VEN|VNM|WLF|ESH|YEM|ZMB|ZWE)$/
        , message: 'Invalid Country Code, Expected Country Code'
    }


]