Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var PropTypes = require('prop-types');
var moment$1 = require('moment-timezone');
var moment = require('moment');
var es$1 = require('moment/locale/es');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var moment__default$1 = /*#__PURE__*/_interopDefaultLegacy(moment$1);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var es__default = /*#__PURE__*/_interopDefaultLegacy(es$1);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

moment__default['default'].updateLocale('es', {
  parentLocale: 'es',
  today: 'Hoy',
  noDateSelected: 'Seleccione una fecha...'
});
var es = {
  es: es__default['default']
};

moment__default['default'].updateLocale('en', {
  parentLocale: 'en',
  today: 'Today',
  noDateSelected: 'Select a date...'
});
var en = moment__default['default'].localeData('en');
var en$1 = {
  en: en
};

var locales = {
  es: es,
  en: en$1
};

var useGenerateDateStructureObject = function useGenerateDateStructureObject(START_DATE, END_DATE) {
  var DATES_MEMO = React.useMemo(function () {
    var DATES = {};
    var START_DATE_YEAR = START_DATE.year();
    var START_DATE_MONTH = START_DATE.month();
    var END_DATE_YEAR = END_DATE.year();
    var END_DATE_MONTH = END_DATE.month();

    for (var year = START_DATE_YEAR; year <= END_DATE_YEAR; year++) {
      DATES[year] = [];
      var months = [];

      if (START_DATE_YEAR === END_DATE_YEAR) {
        for (var i = START_DATE_MONTH; i <= END_DATE_MONTH; i++) {
          months.push(i);
        }
      } else if (year === START_DATE_YEAR) {
        for (var _i = START_DATE_MONTH; _i <= 11; _i++) {
          months.push(_i);
        }
      } else if (year === END_DATE_YEAR) {
        for (var _i2 = 0; _i2 <= END_DATE_MONTH; _i2++) {
          months.push(_i2);
        }
      } else {
        months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      }

      for (var _i3 = 0, _months = months; _i3 < _months.length; _i3++) {
        var month = _months[_i3];
        var daysOnMonth = moment__default$1['default']("".concat(year, "-").concat(month + 1), 'YYYY-MM').daysInMonth();

        for (var day = 1; day <= daysOnMonth; day++) {
          if (!DATES[year][month]) DATES[year][month] = [];
          DATES[year][month].push(day);
        }
      }
    }

    return DATES;
  }, [START_DATE, END_DATE]);
  return DATES_MEMO;
};

var useHelpers = function useHelpers(DISABLED_DAYS) {
  var NOW = moment__default$1['default']();
  var NOW_FORMATED = NOW.format('YYYY-MM-DD');
  var isToday = React.useCallback(function (dateString) {
    return NOW_FORMATED === dateString;
  });
  var isSelected = React.useCallback(function (dateString1, dateString2) {
    return dateString1 === dateString2;
  });
  var isDayDisabled = React.useCallback(function (dateString) {
    return DISABLED_DAYS.includes(dateString);
  });

  var goToday = function goToday(btnTodayRef, containerCalendarRef) {
    var btnToday = btnTodayRef.current;
    var containerCalendar = containerCalendarRef.current;
    containerCalendar.scrollTop = btnToday.offsetTop;
  };

  return [isToday, isSelected, isDayDisabled, goToday];
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var MOBILE = '600px';
var CalendarStyled = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 500px;\n    border-radius: 4px;\n    position: relative;\n    background: black;\n\n    @media( max-width: ", " ){\n        max-width: 320px;\n    }\n"])), MOBILE);
var HeaderStyled = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n    padding: 20px 30px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])), function (props) {
  return props.theme.primaryColor;
});
var HeaderYearStyled = styled__default['default'].span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: white;\n    font-size: 16px;\n\n    @media( max-width: ", " ){\n        font-size: 15px;\n    }\n"])), MOBILE);
var HeaderDateSelectedStyled = styled__default['default'].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: white;\n    font-weight: 600;\n    font-size: 30px;\n\n    @media( max-width: ", " ){\n        font-size: 22px;\n    }\n"])), MOBILE);
var HeaderBtnTodayStyled = styled__default['default'].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: white;\n    color: ", ";\n    font-weight: 600;\n    outline: none;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 16px;\n\n    @media( max-width: ", " ){\n        font-size: 12px;\n    }\n"])), function (props) {
  return props.theme.secondaryColor;
}, MOBILE);
var WeekDaysStyled = styled__default['default'].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    text-align: center;\n    background: white;\n    height: 50px;\n    border: 1px solid #0e71e3;\n"])));
var WeekDaysTextStyled = styled__default['default'].p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: ", ";\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n\n    font-size: 16px;\n\n    @media( max-width: ", " ){\n        font-size: 12px;\n    }\n"])), function (props) {
  return props.theme.secondaryColor;
}, MOBILE);
var CalendarDaysContainerStyled = styled__default['default'].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    max-height: 300px;\n    height: 100%;\n    overflow-y: auto;\n\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n\n    position: relative;\n\n    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0.8) 100%);\n    padding-bottom: 20px;\n\n    scroll-behavior: smooth;\n\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n"])));
var MonthTitleStyled = styled__default['default'].p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    padding: 10px;\n    background-color: ", ";\n    color: white;\n    margin-top: ", ";\n    margin-bottom: 10px;\n\n    @media( max-width: ", " ){\n        font-size: 15px;\n    }\n"])), function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.marginTop ? "".concat(props.marginTop, "px") : 0;
}, MOBILE);
var MonthContainer = styled__default['default'].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n"])));
var DayContainerStyled = styled__default['default'].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    text-align: center;\n    cursor: pointer;\n    transition: background-color 200ms, color 200ms;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
var DayStyled = styled__default['default'].span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 50px;\n    height: 50px;\n\n    color: ", ";\n    font-size: 16px;\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    @media( max-width: ", " ){\n        width: 40px;\n        height: 40px;\n        font-size: 14px;\n    }\n"])), function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.state.includes('today') && "\n        font-weight: bold;\n        border: 1px solid ".concat(props.theme.primaryColor, ";\n        color: ").concat(props.theme.primaryColor, ";\n    ");
}, function (props) {
  return props.state.includes('weekend') && "\n    ";
}, function (props) {
  return props.state.includes('selected') && "\n        border-radius: 50%;\n        font-weight: bold;\n        background-color: ".concat(props.theme.primaryColor, ";\n        color: white;\n    ");
}, function (props) {
  return props.state.includes('disabled') && "\n        cursor: default;\n        color: ".concat(props.theme.disabledDaysColor, " !important;\n    ");
}, MOBILE);

var SmartReactCalendar = function SmartReactCalendar(_ref) {
  var selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      disabledDays = _ref.disabledDays,
      format = _ref.format,
      locale = _ref.locale,
      timezone = _ref.timezone,
      theme = _ref.theme,
      onChange = _ref.onChange;
  moment__default$1['default'].tz.setDefault(timezone);
  moment__default$1['default'].locale(locale, locales[locale]);
  var START_DATE = moment__default$1['default'].isMoment(startDate) ? startDate : moment__default$1['default'](startDate);
  var END_DATE = moment__default$1['default'].isMoment(endDate) ? endDate : moment__default$1['default'](endDate);
  var DISABLED_DAYS = disabledDays;

  var _useState = React.useState(moment__default$1['default'].isMoment(selected) ? selected.format('YYYY-MM-DD') : moment__default$1['default'](selected).format('YYYY-MM-DD')),
      _useState2 = _slicedToArray(_useState, 2),
      dateSelected = _useState2[0],
      setDateSelected = _useState2[1];

  var _useHelpers = useHelpers(DISABLED_DAYS),
      _useHelpers2 = _slicedToArray(_useHelpers, 4),
      isToday = _useHelpers2[0],
      isSelected = _useHelpers2[1],
      isDayDisabled = _useHelpers2[2],
      goToday = _useHelpers2[3]; //Events
  //useEffect(() => {
  //    setDateSelected(moment.isMoment(selected) ? selected.format('YYYY-MM-DD') : moment(selected).format('YYYY-MM-DD'))
  //}, [selected])
  //Refs


  var btnTodayRef = React.useRef();
  var containerCalendarRef = React.useRef();
  var DATES = useGenerateDateStructureObject(START_DATE, END_DATE);
  var selectedMomentDate = !isDayDisabled(dateSelected) ? moment__default$1['default'](dateSelected, 'YYYY-MM-DD') : null;
  var weekdaysMin = React.useMemo(function () {
    return [moment__default$1['default'].weekdaysShort(1), moment__default$1['default'].weekdaysShort(2), moment__default$1['default'].weekdaysShort(3), moment__default$1['default'].weekdaysShort(4), moment__default$1['default'].weekdaysShort(5), moment__default$1['default'].weekdaysShort(6), moment__default$1['default'].weekdaysShort(0)];
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(CalendarStyled, null, /*#__PURE__*/React__default['default'].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                @import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap\");\n\n                * {\n                    font-family: \"Montserrat\", sans-serif;\n                    margin: 0;\n                    padding: 0;\n                }\n            "
    }
  }), /*#__PURE__*/React__default['default'].createElement(HeaderStyled, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(HeaderYearStyled, null, selectedMomentDate ? selectedMomentDate.format('YYYY') : /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      opacity: 0
    }
  }, "0000")), /*#__PURE__*/React__default['default'].createElement(HeaderDateSelectedStyled, null, selectedMomentDate ? selectedMomentDate.format('ddd, MMM Do') : moment__default$1['default'].localeData(locale)._noDateSelected)), /*#__PURE__*/React__default['default'].createElement(HeaderBtnTodayStyled, {
    ref: btnTodayRef,
    onClick: function onClick() {
      return goToday(btnTodayRef, containerCalendarRef);
    }
  }, moment__default$1['default'].localeData(locale)._today)), /*#__PURE__*/React__default['default'].createElement(WeekDaysStyled, null, weekdaysMin.map(function (weekDay) {
    return /*#__PURE__*/React__default['default'].createElement(WeekDaysTextStyled, {
      key: "week-day-".concat(weekDay)
    }, weekDay);
  })), /*#__PURE__*/React__default['default'].createElement(CalendarDaysContainerStyled, {
    ref: containerCalendarRef
  }, Object.keys(DATES).map(function (year) {
    return DATES[year].map(function (days, indexMonth) {
      var arr = [];
      var spaces = moment__default$1['default']("".concat(year, "-").concat(indexMonth + 1), 'YYYY-MM').day() - 1;

      for (var x = 0; x < spaces; x++) {
        arr.push( /*#__PURE__*/React__default['default'].createElement("div", {
          key: "space-index-".concat(x, "-").concat(year, "-").concat(indexMonth + 1)
        }));
      }

      return /*#__PURE__*/React__default['default'].createElement(React.Fragment, {
        key: "month-".concat(indexMonth + 1)
      }, /*#__PURE__*/React__default['default'].createElement(MonthTitleStyled, {
        marginTop: indexMonth !== START_DATE.month() && 15
      }, moment__default$1['default']("".concat(indexMonth + 1), 'MM').format('MMMM')), /*#__PURE__*/React__default['default'].createElement(MonthContainer, null, days.map(function (day, indexDay) {
        var currentDate = "".concat(year, "-").concat((indexMonth + 1).toString().padStart(2, '0'), "-").concat(day.toString().padStart(2, '0'));

        var _isDayDisabled = isDayDisabled(currentDate);

        return /*#__PURE__*/React__default['default'].createElement(React.Fragment, {
          key: "day-".concat(currentDate)
        }, indexDay === 0 && arr.map(function (div) {
          return div;
        }), /*#__PURE__*/React__default['default'].createElement(DayContainerStyled, {
          onClick: function onClick() {
            if (_isDayDisabled) return;
            setDateSelected(currentDate);
            onChange(!format ? currentDate : moment__default$1['default'](currentDate, 'YYYY-MM-DD').format(format));
          }
        }, /*#__PURE__*/React__default['default'].createElement(DayStyled, {
          state: [isToday(currentDate) && 'today', !_isDayDisabled && isSelected(currentDate, dateSelected) && 'selected', _isDayDisabled && 'disabled']
        }, day)));
      })));
    });
  }))));
};

SmartReactCalendar.defaultProps = {
  selected: moment__default$1['default'](),
  startDate: moment__default$1['default'](),
  endDate: moment__default$1['default']().add(2, 'months'),
  disabledDays: ['2021-01-03'],
  format: false,
  locale: 'es',
  timezone: 'Europe/Madrid',
  onChange: function onChange() {},
  theme: {
    primaryColor: "#2e88f1",
    secondaryColor: "#111d4a",
    disabledDaysColor: "#c2c2c2"
  }
};

var isMomentOrDate = function isMomentOrDate(props, propName, componentName) {
  var prop = props[propName];
  if (moment__default$1['default'].isMoment(prop) || prop instanceof Date) return;
  return new Error("Prop ".concat(propName, " is invalid. ").concat(propName, " need to be a instance of Date or a Moment"));
};

var disabledDaysIsCorrect = function disabledDaysIsCorrect(props, propName, componentName) {
  var disabledDays = props.disabledDays;
  var patt = /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

  var _iterator = _createForOfIteratorHelper(disabledDays),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var disabledDay = _step.value;
      var disabledDaysIsValid = patt.test(disabledDay);

      if (!disabledDaysIsValid) {
        return new Error("Prop Array disabledDays is invalid, inside this array have this value ".concat(disabledDay, ". All dates in disabledDays need to have this patt YYYY-MM-DD"));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

SmartReactCalendar.propTypes = {
  selected: isMomentOrDate,
  startDate: isMomentOrDate,
  endDate: isMomentOrDate,
  format: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].oneOf([false])]),
  locale: PropTypes__default['default'].oneOf(['es', 'en']),
  timezone: PropTypes__default['default'].string,
  disabledDays: disabledDaysIsCorrect,
  theme: PropTypes__default['default'].object
};

exports.default = SmartReactCalendar;
//# sourceMappingURL=index.js.map
