/**
 * The `BCH_CHIPs` instruction set.
 *
 * Note: to maximize script compilation compatibility, this instruction set also
 * includes the previous names for new opcodes (e.g. `OP_VERIF` for `OP_BEGIN`).
 */
export var OpcodesBCHCHIPs;
(function (OpcodesBCHCHIPs) {
    /**
     * A.K.A. `OP_FALSE` or `OP_PUSHBYTES_0`
     */
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_0"] = 0] = "OP_0";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_1"] = 1] = "OP_PUSHBYTES_1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_2"] = 2] = "OP_PUSHBYTES_2";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_3"] = 3] = "OP_PUSHBYTES_3";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_4"] = 4] = "OP_PUSHBYTES_4";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_5"] = 5] = "OP_PUSHBYTES_5";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_6"] = 6] = "OP_PUSHBYTES_6";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_7"] = 7] = "OP_PUSHBYTES_7";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_8"] = 8] = "OP_PUSHBYTES_8";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_9"] = 9] = "OP_PUSHBYTES_9";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_10"] = 10] = "OP_PUSHBYTES_10";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_11"] = 11] = "OP_PUSHBYTES_11";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_12"] = 12] = "OP_PUSHBYTES_12";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_13"] = 13] = "OP_PUSHBYTES_13";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_14"] = 14] = "OP_PUSHBYTES_14";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_15"] = 15] = "OP_PUSHBYTES_15";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_16"] = 16] = "OP_PUSHBYTES_16";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_17"] = 17] = "OP_PUSHBYTES_17";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_18"] = 18] = "OP_PUSHBYTES_18";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_19"] = 19] = "OP_PUSHBYTES_19";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_20"] = 20] = "OP_PUSHBYTES_20";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_21"] = 21] = "OP_PUSHBYTES_21";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_22"] = 22] = "OP_PUSHBYTES_22";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_23"] = 23] = "OP_PUSHBYTES_23";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_24"] = 24] = "OP_PUSHBYTES_24";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_25"] = 25] = "OP_PUSHBYTES_25";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_26"] = 26] = "OP_PUSHBYTES_26";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_27"] = 27] = "OP_PUSHBYTES_27";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_28"] = 28] = "OP_PUSHBYTES_28";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_29"] = 29] = "OP_PUSHBYTES_29";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_30"] = 30] = "OP_PUSHBYTES_30";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_31"] = 31] = "OP_PUSHBYTES_31";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_32"] = 32] = "OP_PUSHBYTES_32";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_33"] = 33] = "OP_PUSHBYTES_33";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_34"] = 34] = "OP_PUSHBYTES_34";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_35"] = 35] = "OP_PUSHBYTES_35";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_36"] = 36] = "OP_PUSHBYTES_36";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_37"] = 37] = "OP_PUSHBYTES_37";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_38"] = 38] = "OP_PUSHBYTES_38";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_39"] = 39] = "OP_PUSHBYTES_39";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_40"] = 40] = "OP_PUSHBYTES_40";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_41"] = 41] = "OP_PUSHBYTES_41";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_42"] = 42] = "OP_PUSHBYTES_42";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_43"] = 43] = "OP_PUSHBYTES_43";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_44"] = 44] = "OP_PUSHBYTES_44";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_45"] = 45] = "OP_PUSHBYTES_45";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_46"] = 46] = "OP_PUSHBYTES_46";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_47"] = 47] = "OP_PUSHBYTES_47";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_48"] = 48] = "OP_PUSHBYTES_48";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_49"] = 49] = "OP_PUSHBYTES_49";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_50"] = 50] = "OP_PUSHBYTES_50";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_51"] = 51] = "OP_PUSHBYTES_51";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_52"] = 52] = "OP_PUSHBYTES_52";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_53"] = 53] = "OP_PUSHBYTES_53";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_54"] = 54] = "OP_PUSHBYTES_54";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_55"] = 55] = "OP_PUSHBYTES_55";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_56"] = 56] = "OP_PUSHBYTES_56";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_57"] = 57] = "OP_PUSHBYTES_57";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_58"] = 58] = "OP_PUSHBYTES_58";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_59"] = 59] = "OP_PUSHBYTES_59";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_60"] = 60] = "OP_PUSHBYTES_60";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_61"] = 61] = "OP_PUSHBYTES_61";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_62"] = 62] = "OP_PUSHBYTES_62";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_63"] = 63] = "OP_PUSHBYTES_63";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_64"] = 64] = "OP_PUSHBYTES_64";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_65"] = 65] = "OP_PUSHBYTES_65";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_66"] = 66] = "OP_PUSHBYTES_66";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_67"] = 67] = "OP_PUSHBYTES_67";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_68"] = 68] = "OP_PUSHBYTES_68";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_69"] = 69] = "OP_PUSHBYTES_69";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_70"] = 70] = "OP_PUSHBYTES_70";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_71"] = 71] = "OP_PUSHBYTES_71";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_72"] = 72] = "OP_PUSHBYTES_72";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_73"] = 73] = "OP_PUSHBYTES_73";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_74"] = 74] = "OP_PUSHBYTES_74";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHBYTES_75"] = 75] = "OP_PUSHBYTES_75";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHDATA_1"] = 76] = "OP_PUSHDATA_1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHDATA_2"] = 77] = "OP_PUSHDATA_2";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PUSHDATA_4"] = 78] = "OP_PUSHDATA_4";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_1NEGATE"] = 79] = "OP_1NEGATE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RESERVED"] = 80] = "OP_RESERVED";
    /**
     * A.K.A. `OP_TRUE`
     */
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_1"] = 81] = "OP_1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2"] = 82] = "OP_2";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_3"] = 83] = "OP_3";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_4"] = 84] = "OP_4";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_5"] = 85] = "OP_5";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_6"] = 86] = "OP_6";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_7"] = 87] = "OP_7";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_8"] = 88] = "OP_8";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_9"] = 89] = "OP_9";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_10"] = 90] = "OP_10";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_11"] = 91] = "OP_11";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_12"] = 92] = "OP_12";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_13"] = 93] = "OP_13";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_14"] = 94] = "OP_14";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_15"] = 95] = "OP_15";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_16"] = 96] = "OP_16";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP"] = 97] = "OP_NOP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_VER"] = 98] = "OP_VER";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_IF"] = 99] = "OP_IF";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOTIF"] = 100] = "OP_NOTIF";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_VERIF"] = 101] = "OP_VERIF";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_BEGIN"] = 101] = "OP_BEGIN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_VERNOTIF"] = 102] = "OP_VERNOTIF";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNTIL"] = 102] = "OP_UNTIL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ELSE"] = 103] = "OP_ELSE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ENDIF"] = 104] = "OP_ENDIF";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_VERIFY"] = 105] = "OP_VERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RETURN"] = 106] = "OP_RETURN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TOALTSTACK"] = 107] = "OP_TOALTSTACK";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_FROMALTSTACK"] = 108] = "OP_FROMALTSTACK";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2DROP"] = 109] = "OP_2DROP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2DUP"] = 110] = "OP_2DUP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_3DUP"] = 111] = "OP_3DUP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2OVER"] = 112] = "OP_2OVER";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2ROT"] = 113] = "OP_2ROT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2SWAP"] = 114] = "OP_2SWAP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_IFDUP"] = 115] = "OP_IFDUP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_DEPTH"] = 116] = "OP_DEPTH";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_DROP"] = 117] = "OP_DROP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_DUP"] = 118] = "OP_DUP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NIP"] = 119] = "OP_NIP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OVER"] = 120] = "OP_OVER";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_PICK"] = 121] = "OP_PICK";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ROLL"] = 122] = "OP_ROLL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ROT"] = 123] = "OP_ROT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SWAP"] = 124] = "OP_SWAP";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TUCK"] = 125] = "OP_TUCK";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CAT"] = 126] = "OP_CAT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SPLIT"] = 127] = "OP_SPLIT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NUM2BIN"] = 128] = "OP_NUM2BIN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_BIN2NUM"] = 129] = "OP_BIN2NUM";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SIZE"] = 130] = "OP_SIZE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_INVERT"] = 131] = "OP_INVERT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_AND"] = 132] = "OP_AND";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OR"] = 133] = "OP_OR";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_XOR"] = 134] = "OP_XOR";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_EQUAL"] = 135] = "OP_EQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_EQUALVERIFY"] = 136] = "OP_EQUALVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RESERVED1"] = 137] = "OP_RESERVED1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RESERVED2"] = 138] = "OP_RESERVED2";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_1ADD"] = 139] = "OP_1ADD";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_1SUB"] = 140] = "OP_1SUB";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2MUL"] = 141] = "OP_2MUL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_2DIV"] = 142] = "OP_2DIV";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NEGATE"] = 143] = "OP_NEGATE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ABS"] = 144] = "OP_ABS";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOT"] = 145] = "OP_NOT";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_0EQUAL"] = 145] = "OP_0EQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_0NOTEQUAL"] = 146] = "OP_0NOTEQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ADD"] = 147] = "OP_ADD";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SUB"] = 148] = "OP_SUB";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_MUL"] = 149] = "OP_MUL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_DIV"] = 150] = "OP_DIV";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_MOD"] = 151] = "OP_MOD";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_LSHIFT"] = 152] = "OP_LSHIFT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RSHIFT"] = 153] = "OP_RSHIFT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_BOOLAND"] = 154] = "OP_BOOLAND";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_BOOLOR"] = 155] = "OP_BOOLOR";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NUMEQUAL"] = 156] = "OP_NUMEQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NUMEQUALVERIFY"] = 157] = "OP_NUMEQUALVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NUMNOTEQUAL"] = 158] = "OP_NUMNOTEQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_LESSTHAN"] = 159] = "OP_LESSTHAN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_GREATERTHAN"] = 160] = "OP_GREATERTHAN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_LESSTHANOREQUAL"] = 161] = "OP_LESSTHANOREQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_GREATERTHANOREQUAL"] = 162] = "OP_GREATERTHANOREQUAL";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_MIN"] = 163] = "OP_MIN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_MAX"] = 164] = "OP_MAX";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_WITHIN"] = 165] = "OP_WITHIN";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_RIPEMD160"] = 166] = "OP_RIPEMD160";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SHA1"] = 167] = "OP_SHA1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_SHA256"] = 168] = "OP_SHA256";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_HASH160"] = 169] = "OP_HASH160";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_HASH256"] = 170] = "OP_HASH256";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CODESEPARATOR"] = 171] = "OP_CODESEPARATOR";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKSIG"] = 172] = "OP_CHECKSIG";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKSIGVERIFY"] = 173] = "OP_CHECKSIGVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKMULTISIG"] = 174] = "OP_CHECKMULTISIG";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKMULTISIGVERIFY"] = 175] = "OP_CHECKMULTISIGVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP1"] = 176] = "OP_NOP1";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKLOCKTIMEVERIFY"] = 177] = "OP_CHECKLOCKTIMEVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKSEQUENCEVERIFY"] = 178] = "OP_CHECKSEQUENCEVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP4"] = 179] = "OP_NOP4";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP5"] = 180] = "OP_NOP5";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP6"] = 181] = "OP_NOP6";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP7"] = 182] = "OP_NOP7";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP8"] = 183] = "OP_NOP8";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP9"] = 184] = "OP_NOP9";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_NOP10"] = 185] = "OP_NOP10";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKDATASIG"] = 186] = "OP_CHECKDATASIG";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_CHECKDATASIGVERIFY"] = 187] = "OP_CHECKDATASIGVERIFY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_REVERSEBYTES"] = 188] = "OP_REVERSEBYTES";
    /**
     * First codepoint left undefined before nullary introspection operations.
     */
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN189"] = 189] = "OP_UNKNOWN189";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN190"] = 190] = "OP_UNKNOWN190";
    /**
     * Last codepoint left undefined before nullary introspection operations.
     */
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN191"] = 191] = "OP_UNKNOWN191";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_INPUTINDEX"] = 192] = "OP_INPUTINDEX";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_ACTIVEBYTECODE"] = 193] = "OP_ACTIVEBYTECODE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TXVERSION"] = 194] = "OP_TXVERSION";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TXINPUTCOUNT"] = 195] = "OP_TXINPUTCOUNT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TXOUTPUTCOUNT"] = 196] = "OP_TXOUTPUTCOUNT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_TXLOCKTIME"] = 197] = "OP_TXLOCKTIME";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UTXOVALUE"] = 198] = "OP_UTXOVALUE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UTXOBYTECODE"] = 199] = "OP_UTXOBYTECODE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPOINTTXHASH"] = 200] = "OP_OUTPOINTTXHASH";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPOINTINDEX"] = 201] = "OP_OUTPOINTINDEX";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_INPUTBYTECODE"] = 202] = "OP_INPUTBYTECODE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_INPUTSEQUENCENUMBER"] = 203] = "OP_INPUTSEQUENCENUMBER";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPUTVALUE"] = 204] = "OP_OUTPUTVALUE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPUTBYTECODE"] = 205] = "OP_OUTPUTBYTECODE";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UTXOTOKENCATEGORY"] = 206] = "OP_UTXOTOKENCATEGORY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UTXOTOKENCOMMITMENT"] = 207] = "OP_UTXOTOKENCOMMITMENT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UTXOTOKENAMOUNT"] = 208] = "OP_UTXOTOKENAMOUNT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPUTTOKENCATEGORY"] = 209] = "OP_OUTPUTTOKENCATEGORY";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPUTTOKENCOMMITMENT"] = 210] = "OP_OUTPUTTOKENCOMMITMENT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_OUTPUTTOKENAMOUNT"] = 211] = "OP_OUTPUTTOKENAMOUNT";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN212"] = 212] = "OP_UNKNOWN212";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN213"] = 213] = "OP_UNKNOWN213";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN214"] = 214] = "OP_UNKNOWN214";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN215"] = 215] = "OP_UNKNOWN215";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN216"] = 216] = "OP_UNKNOWN216";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN217"] = 217] = "OP_UNKNOWN217";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN218"] = 218] = "OP_UNKNOWN218";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN219"] = 219] = "OP_UNKNOWN219";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN220"] = 220] = "OP_UNKNOWN220";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN221"] = 221] = "OP_UNKNOWN221";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN222"] = 222] = "OP_UNKNOWN222";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN223"] = 223] = "OP_UNKNOWN223";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN224"] = 224] = "OP_UNKNOWN224";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN225"] = 225] = "OP_UNKNOWN225";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN226"] = 226] = "OP_UNKNOWN226";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN227"] = 227] = "OP_UNKNOWN227";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN228"] = 228] = "OP_UNKNOWN228";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN229"] = 229] = "OP_UNKNOWN229";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN230"] = 230] = "OP_UNKNOWN230";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN231"] = 231] = "OP_UNKNOWN231";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN232"] = 232] = "OP_UNKNOWN232";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN233"] = 233] = "OP_UNKNOWN233";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN234"] = 234] = "OP_UNKNOWN234";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN235"] = 235] = "OP_UNKNOWN235";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN236"] = 236] = "OP_UNKNOWN236";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN237"] = 237] = "OP_UNKNOWN237";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN238"] = 238] = "OP_UNKNOWN238";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN239"] = 239] = "OP_UNKNOWN239";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN240"] = 240] = "OP_UNKNOWN240";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN241"] = 241] = "OP_UNKNOWN241";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN242"] = 242] = "OP_UNKNOWN242";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN243"] = 243] = "OP_UNKNOWN243";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN244"] = 244] = "OP_UNKNOWN244";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN245"] = 245] = "OP_UNKNOWN245";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN246"] = 246] = "OP_UNKNOWN246";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN247"] = 247] = "OP_UNKNOWN247";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN248"] = 248] = "OP_UNKNOWN248";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN249"] = 249] = "OP_UNKNOWN249";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN250"] = 250] = "OP_UNKNOWN250";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN251"] = 251] = "OP_UNKNOWN251";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN252"] = 252] = "OP_UNKNOWN252";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN253"] = 253] = "OP_UNKNOWN253";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN254"] = 254] = "OP_UNKNOWN254";
    OpcodesBCHCHIPs[OpcodesBCHCHIPs["OP_UNKNOWN255"] = 255] = "OP_UNKNOWN255";
})(OpcodesBCHCHIPs || (OpcodesBCHCHIPs = {}));
//# sourceMappingURL=bch-chips-opcodes.js.map