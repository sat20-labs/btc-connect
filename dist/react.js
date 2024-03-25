import J,{useMemo as y2} from"react";import{useEffect as m} from"react";import F,{useEffect as o,useState as H} from"react";import n from"react-dom";var v="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTEuODc1NTY2NyUiIHkxPSIyOS43Mjg4NjIyJSIgeDI9IjUuNTkzNTkzODUlIiB5Mj0iNjcuNzM4NzI0OCUiIGlkPSJsaW5lYXJHcmFkaWVudC1leXZkOXN5Z2Z5LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjAxQzFCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NzM5MEQiIG9mZnNldD0iMzYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFQTgxMDEiIG9mZnNldD0iNjclIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEI4NTIiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMC41MTQwNjI0JSIgeTE9IjYyLjg4MzE2ODglIiB4Mj0iMTEwLjc4ODYyJSIgeTI9IjM3LjMyMTc0MDIlIiBpZD0ibGluZWFyR3JhZGllbnQtZXl2ZDlzeWdmeS0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFGMUQxQyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzczOTBEIiBvZmZzZXQ9IjM3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUE4MTAxIiBvZmZzZXQ9IjY3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjRGQjUyIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iNTAuMDQ1MDk4OCUiIGZ4PSI1MCUiIGZ5PSI1MC4wNDUwOTg4JSIgcj0iNTAuODMyODIzNiUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41MDAwMDAsMC41MDA0NTEpLHNjYWxlKDAuOTgzNjEyLDEuMDAwMDAwKSx0cmFuc2xhdGUoLTAuNTAwMDAwLC0wLjUwMDQ1MSkiIGlkPSJyYWRpYWxHcmFkaWVudC1leXZkOXN5Z2Z5LTMiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjRCODUyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFQTgxMDEiIG9mZnNldD0iMzMlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NzM5MEQiIG9mZnNldD0iNjQlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMTFDMUQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDYuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDkuMzcxMDQwNiw3LjkwMTkzODMzIEw2Ny42OTU5OTYsMjUuNzU0MjQ5NyBDNjkuMjU1ODc2MiwyNy4yNzA2MjQ1IDcwLjAyMzYwMTgsMjguODA0OTc3OSA3MCwzMC4zNTExMzQgQzY5Ljk3NTI5MywzMS44OTcyOTAxIDY5LjMwNDE4NSwzMy4zMDY2MTcgNjcuOTkyMjk5MSwzNC41ODUxNTMzIEM2Ni42MTk4OSwzNS45MjMyNTIyIDY1LjEzODY0ODksMzYuNjAxMjIyMyA2My41NTQ2MTQzLDM2LjYzMDg2NjMgQzYxLjk3MDU3OTcsMzYuNjU0NzQ2MiA2MC4zOTg2MjIzLDM1LjkwNTQxMDkgNTguODM4NzQyMSwzNC4zODkwMzYxIEw0MC4wOTY3MTE2LDE2LjEzMjI4OTUgQzM3Ljk2ODUxNjgsMTQuMDU2OTMyNCAzNS45MTI5MjI1LDEyLjU4ODAxNTUgMzMuOTM1OTY3MiwxMS43MjU3MzA5IEMzMS45NTg4NzQ2LDEwLjg2MzQ0NjIgMjkuODc5MTI1OSwxMC43MjY2NzE5IDI3LjcwMjYyMjMsMTEuMzIxMzUwNSBDMjUuNTIwMDgwMSwxMS45MTAwODY2IDIzLjE4MDM5NywxMy40MjY1MTYzIDIwLjY3MTM1ODcsMTUuODY0NjY5NyBDMTcuMjEzMTYyMiwxOS4yMzY1NDE2IDE1LjU2MjU2NTgsMjIuNDAwMjE5MSAxNS43MzE5MjExLDI1LjM1NTgzOTMgQzE1LjkwMTEzOTEsMjguMzExMzIyMyAxNy42MTgxNjAyLDMxLjM3OTg5MTkgMjAuODc2OTQ1NiwzNC41NDk2MDc5IEwzOS43NzAyMTU1LDUyLjk2MDg4NzggQzQxLjM0ODIxMTUsNTQuNDk1MTAzOSA0Mi4xMjE5NzU4LDU2LjAyOTMyMDEgNDIuMDk3ODIxNCw1Ny41NTE3MzM1IEM0Mi4wNzM2NjcsNTkuMDgwMDQ4MyA0MS4zOTY1MjAzLDYwLjQ4OTUxMjQgNDAuMDYwMzQyOCw2MS43OTE3OTE0IEMzOC43MzAzNDExLDYzLjA4ODE2OTEgMzcuMjYxMTc3Miw2My43NjYxMzkxIDM1LjY2NTA2NTQsNjMuODE5NjYzMSBDMzQuMDY4OTUzNiw2My44NzMxODcxIDMyLjQ3ODg4MDQsNjMuMTI5ODkwMyAzMC45MDY5MjMsNjEuNTk1NTM2OSBMMTIuNTgxOTY3Nyw0My43NDMyMzkzIEM5LjYwMTM2OTYxLDQwLjg0MTI4MDIgNy40NDkwMzQxMywzOC4wOTM4NTQ0IDYuMTI1MDAyNDUsMzUuNTAwOTYxOSBDNC44MDA5NTcwNCwzMi45MDgyMDY2IDQuMzA1MjAxNywyOS45NzY0NjYzIDQuNjQ5ODEzNjIsMjYuNzA1NzQwOSBDNC45NTgxNTI3OCwyMy45MDQ3OTEyIDUuODcxMDY1NTksMjEuMTkzMDQ4IDcuMzk0NjMxODMsMTguNTY0NjEwMSBDOC45MTIxMzIwMywxNS45MzYwMzUgMTEuMDg4NjQ5NCwxMy4yNDgxMTY4IDEzLjkxMjEwNjYsMTAuNDk0NzQ4NSBDMTcuMjczNTQ4Miw3LjIxODA2Njg3IDIwLjQ4Mzg4NzYsNC43MDg1MjA3NSAyMy41NDMxMjQ3LDIuOTYwMTUzOSBDMjYuNTk2MzIzMywxLjIxMTc5OTQgMjkuNTUyNjI5NywwLjI0MjQ3MDk2MyAzMi40MDYyOCwwLjA0MDI4MDI0MjIgQzM1LjI2NTk2ODgsLTAuMTYxOTEwNzUzIDM4LjA4MzM4NzUsMC4zOTcwODc5NDUgNDAuODcwNDc1OSwxLjcxNzI3Mjc3IEM0My42NTc3MDE1LDMuMDM3NDYxNyA0Ni40ODcxOTc0LDUuMDk1MDU5NzggNDkuMzY1MDAyLDcuOTAxOTM4MzMgTDQ5LjM3MTA0MDYsNy45MDE5MzgzMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LWV5dmQ5c3lnZnktMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC42MjI5MTI2LDc5LjkzNTQ1MTUgTDIuMzA0MDIzMzYsNjIuMDgzMTUzOSBDMC43NDQxOTM5NTIsNjAuNTYwNzQwNCAtMC4wMjM2Mjk1NTQxLDU5LjAzMjQyNTcgMi4wNDU4MDg0OWUtMTUsNTcuNDg2MjY5NiBDMC4wMjQ3MzcyOTkzLDU1Ljk0MDExMzUgMC42OTU4Mjc1MSw1NC41MzA3ODY2IDIuMDA3Nzc1MTMsNTMuMjUyMTEzIEMzLjM4MDE4NDI0LDUxLjkxNDE1MTQgNC44NjE0MjUzOCw1MS4yMzYxODEzIDYuNDQ1NDMyNTIsNTEuMjA2NCBDOC4wMjk0NTMzOSw1MS4xODI2NTczIDkuNjAxMzY5NjEsNTEuOTI1OTU0MSAxMS4xNjEyMDg2LDUzLjQ0ODM2NzUgTDI5Ljg5NzI0MTcsNzEuNzA1MTE0MSBDMzIuMDMxNDc1MSw3My43ODA0NzExIDM0LjA4MTAzMDgsNzUuMjQ5MzYwNiAzNi4wNTc5ODYxLDc2LjExMTY0NTMgQzM4LjAzNTA3ODcsNzYuOTczOTI5OSA0MC4xMTQ4Mjc0LDc3LjEwNDcyMDUgNDIuMjk3MzY5Niw3Ni41MTU5NTcgQzQ0LjQ3OTkxMTgsNzUuOTI3MzMwNyA0Ni44MTk1OTQ5LDc0LjQxMDgxODYgNDkuMzI4NjMzMiw3MS45NjY2OTUzIEM1Mi43ODY5NjY5LDY4LjU5NDgyMzMgNTQuNDM3NDI2MSw2NS40MzExNDU5IDU0LjI2ODIwODEsNjIuNDc1NjYyOSBDNTQuMDk4ODUyOCw1OS41MjAwNDI2IDUyLjM4MTgzMTcsNTYuNDUxNDczMSA0OS4xMjMxODM2LDUzLjI3NTk5MjkgTDM5LjA1NjgzNzMsNDMuNTUyODg2MSBDMzcuNDc4ODQxMyw0Mi4wMTg2NyAzNi43MDQ5Mzk4LDQwLjQ4NDMxNjYgMzYuNzI5MDk0MiwzOC45NjIwNDA0IEMzNi43NTMyNDg2LDM3LjQzMzcyNTcgMzcuNDMwMzk1MiwzNi4wMjQyNjE1IDM4Ljc2NjU3MjcsMzQuNzIxOTgyNSBDNDAuMDk2NzExNiwzMy40MjU0Njc2IDQxLjU2NTg3NTYsMzIuNzQ3NjM0OCA0My4xNjE4NTAxLDMyLjY5NDExMDggQzQ0Ljc1Nzk2MTksMzIuNjQwNTg2OSA0Ni4zNDgwMzUxLDMzLjM4Mzg4MzYgNDcuOTE5OTkyNSwzNC45MTgyMzcgTDU3LjQxMTk4NTYsNDQuMDgyMjI0MyBDNjAuMzkyNTgzNyw0Ni45ODQxODM0IDYyLjU0NDkzMjksNDkuNzMxNjA5MiA2My44NjkwMzMyLDUyLjMyNDUwMTcgQzY1LjE5Mjk5NjMsNTQuOTE3MjU3IDY1LjY4ODcxMDQsNTcuODQ4OTk3MyA2NS4zNDQwOTg1LDYxLjExOTcyMjcgQzY1LjAzNTg1NTQsNjMuOTIwNjcyNCA2NC4xMjI5Mjg5LDY2LjYzMjQxNTYgNjIuNTk5MjgwMyw2OS4yNjA5OTA3IEM2MS4wODE4MDc1LDcxLjg4OTQyODYgNTguOTA1MzAzOSw3NC41Nzc0MjkxIDU2LjA4MTg0NjcsNzcuMzMwNzU2MyBDNTIuNzIwNDA1MSw4MC42MDczODMgNDkuNTEwMDY1Nyw4My4xMTY5NzAzIDQ2LjQ1MDgyODYsODQuODY1MjgyMiBDNDMuMzkxNTkxNCw4Ni42MTM3MzE0IDQwLjQzNTI4NSw4Ny41ODg5NjU0IDM3LjU3NTU5NjEsODcuNzkxMTIxMiBDMzQuNzE1OTA3Myw4Ny45OTM0MTQzIDMxLjg5ODQ4ODYsODcuNDM0Mjk0OSAyOS4xMTE0MDAyLDg2LjExNDE3NDUgQzI2LjMyNDE3NDUsODQuNzkzOTE3IDIzLjQ5NDY3ODcsODIuNzM2NDAxMiAyMC42MTY4NzQsNzkuOTI5NTUwMSBMMjAuNjIyOTEyNiw3OS45MzU0NTE1IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtZXl2ZDlzeWdmeS0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjA0OTU5MDksMzMuODcxNjM3OCBDMzUuNzY1OTM3NSwzMy44NzE2Mzc4IDM4Ljc3ODY0OTksMzAuOTA4MzMyMSAzOC43Nzg2NDk5LDI3LjI1Mjc4MzIgQzM4Ljc3ODY0OTksMjMuNTk3MzcxNSAzNS43NjU5Mzc1LDIwLjYzNDA2NTggMzIuMDQ5NTkwOSwyMC42MzQwNjU4IEMyOC4zMzMyNDQyLDIwLjYzNDA2NTggMjUuMzIwNTMxOCwyMy41OTczNzE1IDI1LjMyMDUzMTgsMjcuMjUyNzgzMiBDMjUuMzIwNTMxOCwzMC45MDgzMzIxIDI4LjMzMzI0NDIsMzMuODcxNjM3OCAzMi4wNDk1OTA5LDMzLjg3MTYzNzggWiIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC1leXZkOXN5Z2Z5LTMpIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",E="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+Cgk8ZyBpZD0iXzIxODczODEzMjM4NTYiPgoJCTxyZWN0IHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiPjwvcmVjdD4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0NjMsMTAxNWgtNDA0Yy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxdi00MDQgICAgIEMxNDk0LDEwMjksMTQ4MCwxMDE1LDE0NjMsMTAxNXoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5Niw1NDlINTkyYy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxVjU4MEMxMDI3LDU2MywxMDEzLDU0OSw5OTYsNTQ5eiI+PC9wYXRoPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTkzMCw1NDloLTQwNGMtMTcsMC0zMSwxNC0zMSwzMXY0MDRjMCwxNywxNCwzMSwzMSwzMWg0MDRjMTcsMCwzMS0xNCwzMS0zMVY1ODAgICAgIEMxOTYxLDU2MywxOTQ3LDU0OSwxOTMwLDU0OXoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5NiwxNDgySDU5MmMtMTcsMC0zMSwxNC0zMSwzMXY0MDRjMCwxNywxNCwzMSwzMSwzMWg0MDRjMTcsMCwzMS0xNCwzMS0zMXYtNDA0ICAgICBDMTAyNywxNDk2LDEwMTMsMTQ4Miw5OTYsMTQ4MnoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE5MzAsMTQ4MmgtNDA0Yy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxdi00MDQgICAgIEMxOTYxLDE0OTYsMTk0NywxNDgyLDE5MzAsMTQ4MnoiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==",x="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjQ2IDEyTDE5IDE3LjU0VjE5aC0xLjQ2TDEyIDEzLjQ2TDYuNDYgMTlINXYtMS40NkwxMC41NCAxMkw1IDYuNDZWNWgxLjQ2TDEyIDEwLjU0TDE3LjU0IDVIMTl2MS40NkwxMy40NiAxMloiLz48L3N2Zz4=",f="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMzNDYxYmMiIGQ9Ik0xMiA0VjJBMTAgMTAgMCAwIDAgMiAxMmgyYTggOCAwIDAgMSA4LThaIi8+PC9zdmc+";var u=({visible:z,title:G="Select Wallet",theme:y="light",wallets:j=[],zIndex:$=100,className:D,onClick:g,onClose:q})=>{const[Q,Y]=H(!1),[V,Z]=H(!1),S=async(P,_)=>{if(V||!_)return;Z(!0);try{await g?.(P)}catch(K){throw K}finally{Z(!1)}};o(()=>{console.log("WalletSelectModal mounted"),Y(!0)},[]);const T=z?F.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen",style:{zIndex:$}},F.createElement("div",{className:`bg-black ${y==="dark"?"bg-opacity-70":"bg-opacity-30"}  w-full h-full`}),F.createElement("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-[90%] min-h-30 max-h-[full] rounded-xl  overflow-hidden ${y==="dark"?"text-[#ecedee] bg-[#18181b]":"bg-white text-black"} ${D}`},F.createElement("div",{className:`p-4  relative ${y==="dark"?"border-b border-gray-600":"border-b border-gray-200"}`},F.createElement("h2",{className:"text-xl font-bold text-center"},G),F.createElement("button",{onClick:()=>q?.(),className:"absolute top-1/2 -translate-y-1/2 right-4"},F.createElement("img",{src:x,alt:"close",className:`w-6 h-6 ${y==="dark"?"invert":""}`}))),F.createElement("div",{className:"p-4 flex flex-col gap-2"},j.map((P)=>F.createElement("div",{key:P.id,onClick:()=>S?.(P.id,P.installed),className:`h-12 cursor-pointer flex items-center justify-between p-2 gap-2 rounded-lg relative overflow-hidden ${y==="dark"?"bg-[#2d2d2d] text-[#ecedee]":"bg-gray-100 text-black"}`},V&&F.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center"},F.createElement("img",{src:f,alt:"loading",className:"w-6 h-6 animate-spin"})),F.createElement("div",{className:"flex items-center flex-1"},F.createElement("img",{src:P.logo,alt:P.name,className:"w-8 h-8 mr-2"}),F.createElement("span",{className:"flex-1"},P.name)),F.createElement("div",{className:"text-xs text-orange-600"},!P.installed&&"Not Installed")))))):null;if(Q)return n.createPortal(T,document.body);else return null};var I=(z,G=10,y="*****")=>{if(typeof z==="string"&&z)return`${z?.substring(0,G)}${y}${z?.substring(z?.length-G)}`;return""};import i from"react";function C(z){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...z},i.createElement("path",{fill:"currentColor",d:"M13.34 8.17c-.93 0-1.69-.77-1.69-1.7a1.69 1.69 0 0 1 1.69-1.69c.94 0 1.7.76 1.7 1.69c0 .93-.76 1.7-1.7 1.7M10.3 19.93l-5.93-1.18l.34-1.7l4.15.85l1.35-6.86l-1.52.6v2.86H7v-3.96l4.4-1.87l.67-.08c.6 0 1.1.34 1.43.85l.86 1.35c.68 1.21 2.03 2.03 3.64 2.03v1.68c-1.86 0-3.56-.83-4.66-2.1l-.5 2.54l1.77 1.69V23h-1.69v-5.1l-1.78-1.69l-.84 3.72M21 23h-2V3H6v13.11l-2-.42V1h17v22M6 23H4v-3.22l2 .42V23Z"}))}import{create as t} from"zustand";import{devtools as e} from"zustand/middleware";class N{ready=!1;connected=!1;address="";publicKey;network;constructor(z){this.network=z}disconnect(){this.address=void 0,this.publicKey=void 0}getAccount(){return this.address}isAuthorized(){return!!this.getAccount()}async getNetwork(){if(!this.network)throw new Error("Something went wrong while connecting");return this.network}async getPublicKey(){if(!this.publicKey)throw new Error("Something went wrong while connecting");return this.publicKey}}var c=(z)=>{switch(z){case"testnet":return"testnet";default:return"livenet"}};class L extends N{id="unisat";name="Unisat";logo=v;homepage="https://unisat.io";banance={confirmed:0,unconfirmed:0,total:0};unisat;constructor(z){super(z);this.unisat=window.unisat}on(z,G){if(!this.unisat)throw new Error("Unisat not installed");this.unisat.on(z,G)}removeListener(z,G){if(!this.unisat)throw new Error("Unisat not installed");this.unisat.removeListener(z,G)}async connect(){this.connected=!1;try{if(!this.unisat)throw new Error("Unisat not installed");await this.getCurrentInfo()}catch(z){throw z}return this.connected}async getCurrentInfo(){if(!this.unisat)throw new Error("Unisat not installed");const z=await this.unisat.getAccounts();if(z.length){this.address=z[0];const[G,y,j]=await Promise.all([this.unisat.getPublicKey(),this.unisat.getNetwork(),this.unisat.getBalance()]);this.publicKey=G,this.network=y,this.banance=j,this.connected=!0}}async disconnect(){this.address=void 0,this.publicKey=void 0,this.connected=!1,this.banance={confirmed:0,unconfirmed:0,total:0}}async getAccounts(){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.getAccounts()}async sendToAddress(z,G){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat?.sendBitcoin(z,G)}async switchNetwork(z){if(!this.unisat)throw new Error("Unisat not installed");await this.unisat.switchNetwork(c(z))}async getPublicKey(){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.getPublicKey()}async getBalance(){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.getBalance()}async signPsbt(z,G){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.signPsbt(z,G)}async signMessage(z){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.signMessage(z)}async signPsbts(z,G){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.signPsbts(z,G)}async pushTx(z){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.pushTx({rawtx:z})}async pushPsbt(z){if(!this.unisat)throw new Error("Unisat not installed");return this.unisat.pushPsbt(z)}}class O extends N{id="okx";name="OKX";logo=E;homepage="https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider";banance={confirmed:0,unconfirmed:0,total:0};okxwallet;constructor(z){super(z);this.okxwallet=z==="testnet"?window.okxwallet?.bitcoinTestnet:window.okxwallet?.bitcoin}on(z,G){if(this.network==="livenet")this.okxwallet?.on(z,G)}async connect(){this.connected=!1;try{if(!this.okxwallet)throw new Error("OkxWallet not installed");const z=await this.okxwallet.connect();this.connected=!0,this.address=z.address,this.publicKey=z.publicKey,await this.switchNetwork("livenet"),await this.getCurrentInfo()}catch(z){throw z}return this.connected}async getCurrentInfo(){if(this.network==="livenet"){if(!this.okxwallet)throw new Error("OkxWallet not installed");const z=await this.okxwallet.getAccounts();if(z.length){this.address=z[0];const[G,y,j]=await Promise.all([this.okxwallet.getPublicKey(),this.okxwallet.getNetwork(),this.okxwallet.getBalance()]);this.publicKey=G,this.network=y,this.banance=j,this.connected=!0}}}async disconnect(){this.address=void 0,this.publicKey=void 0,this.connected=!1,this.banance={confirmed:0,unconfirmed:0,total:0}}async getAccounts(){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.getAccounts()}async getNetwork(){return this.network}async getPublicKey(){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.getPublicKey()}async getBalance(){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.getBalance()}async sendToAddress(z,G){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet?.sendBitcoin(z,G)}async switchNetwork(z){this.network=z,this.okxwallet=z==="testnet"?window.okxwallet.bitcoinTestnet:window.okxwallet.bitcoin}async signPsbt(z,G){if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.signPsbt(z,G)}async signMessage(z){if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.signMessage(z)}async signPsbts(z,G){if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.signPsbts(z,G)}async pushTx(z){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.pushTx(z)}async pushPsbt(z){if(this.network!=="livenet")throw new Error("Can't get accounts on testnet");if(!this.okxwallet)throw new Error("OkxWallet not installed");return this.okxwallet.pushPsbt(z)}}class R{local_storage_key="_btc_connector_id";local_disconnect_key="_btc_disconnect_status";connectorId="unisat";localConnectorId;disConnectStatus=!1;connected=!1;address;publicKey;network;balance={confirmed:0,unconfirmed:0,total:0};connectors;connector;constructor({network:z="livenet",defaultConnectorId:G="unisat"}){this.network=z,this.connectors=[{id:"unisat",instance:new L(this.network),installed:!!window.unisat},{id:"okx",instance:new O(this.network),installed:!!window.okxwallet}],this.localConnectorId=localStorage.getItem(this.local_storage_key)||void 0,this.disConnectStatus=localStorage.getItem(this.local_disconnect_key)=="1",this.connectorId=G,this.connector=this.connectors.find((y)=>y.id===G&&y.installed)?.instance}switchConnector(z){const G=this.connectors.find((y)=>y.id===z&&y.installed)?.instance;if(!G)throw new Error("Connector not found");return this.connectorId=z,this.connector=G,G}async connect(){if(!this.connector)throw new Error("Connector not found");if(this.connected=await this.connector.connect(),this.connected)this.address=this.connector.address,this.publicKey=this.connector.publicKey,this.balance=this.connector.banance,this.network=this.connector.network;return localStorage.setItem(this.local_storage_key,this.connectorId),localStorage.removeItem(this.local_disconnect_key),this.connected}async getCurrentInfo(){if(!this.connector)throw new Error("Connector not found");try{await this.connector.getCurrentInfo(),this.address=this.connector.address,this.publicKey=this.connector.publicKey,this.balance=this.connector.banance,this.connected=this.connector.connected}catch(z){throw z}}async check(){if(this.disConnectStatus)return!1;this.connectorId=this.localConnectorId||this.connectorId;const z=this.connectors.find((G)=>G.id===this.connectorId&&G.installed)?.instance;if(!z)throw new Error("Connector not found");this.connector=z;try{await this.getCurrentInfo()}catch(G){console.error(G)}}async disconnect(){if(!this.connector)throw new Error("Connector not found");await this.connector.disconnect(),this.connected=!1,this.address=void 0,this.publicKey=void 0,this.balance={confirmed:0,unconfirmed:0,total:0},localStorage.setItem(this.local_disconnect_key,"1")}async getAccounts(){if(!this.connector)throw new Error("Connector not found");return this.connector.getAccounts()}async getNetwork(){if(!this.connector)throw new Error("Connector not found");return this.connector.network}async switchNetwork(z){if(!this.connector)throw new Error("Connector not found");await this.connector.switchNetwork(z),this.network=z,await this.getCurrentInfo()}async sendToAddress(z,G){if(!this.connector)throw new Error("Connector not found");if(G<=0)throw new Error("Invalid amount");return this.connector.sendToAddress(z,G)}async signMessage(z,G){if(!this.connector)throw new Error("Connector not found");return this.connector.signMessage(z)}async signPsbt(z,G){if(!this.connector)throw new Error("Connector not found");return this.connector.signPsbt(z,G)}async signPsbts(z,G){if(!this.connector)throw new Error("Connector not found");return this.connector.signPsbts(z,G)}async pushTx(z){if(!this.connector)throw new Error("Connector not found");return this.connector.pushTx(z)}async pushPsbt(z){if(!this.connector)throw new Error("Connector not found");return this.connector.pushPsbt(z)}on=(z,G)=>{if(!this.connector)throw new Error("Connector not found");if(this.connector instanceof L)this.connector.on(z,G);else this.connector.on(z,G)};removeListener=(z,G)=>{if(!this.connector)throw new Error("Connector not found");if(this.connector instanceof L)this.connector.removeListener(z,G);else if(this.connector instanceof O)return}}var h=R;var z2={initStatus:!1,modalVisible:!1,balance:{confirmed:0,unconfirmed:0,total:0},connectors:[],publicKey:"",address:"",connected:!1,network:"livenet"},k=t()(e((z,G)=>({...z2,setModalVisible:(y)=>{z(()=>({modalVisible:y}))},init:(y={})=>{try{const{network:j="livenet",defaultConnectorId:$="unisat"}=y,D=new h(y);window.btcWallet=D,z(()=>({btcWallet:D,network:j,connectorId:$,connector:D.connector,localConnectorId:D.localConnectorId,connectors:D.connectors.map((g)=>({id:g.id,name:g.instance.name,logo:g.instance.logo,connector:g.instance,installed:g.installed})),initStatus:!0}))}catch(j){throw console.error("Error initializing Wallet",j),z(()=>({initStatus:!1})),j}},switchConnector(y){const j=G().btcWallet;if(!j)throw new Error("Wallet not initialized");j.switchConnector(y),z(()=>({connectorId:y,connector:j.connector,localConnectorId:j.localConnectorId}))},check:async()=>{try{const y=G().btcWallet;if(!y)throw new Error("Wallet not initialized");await y.check();const{address:j,publicKey:$,balance:D,connected:g,localConnectorId:q}=y;z((Q)=>({publicKey:$,address:j,balance:D,connected:g,localConnectorId:q}))}catch(y){throw console.error("Error checking Wallet",y),y}},connect:async()=>{try{const y=G().btcWallet;if(!y)throw new Error("Wallet not initialized");await y.connect();const{address:j,publicKey:$,balance:D,connected:g,network:q,localConnectorId:Q}=y;z((Y)=>({publicKey:$,address:j,balance:D,connected:g,network:q,localConnectorId:Q}))}catch(y){throw console.error("Error connecting Wallet",y),y}},disconnect:async()=>{const{btcWallet:y}=G();if(!y)throw new Error("Wallet not initialized");await y.disconnect(),z((j)=>({balance:{confirmed:0,unconfirmed:0,total:0},connectorId:void 0,publicKey:"",address:"",initStatus:!1,connected:!1,network:"livenet"}))},switchNetwork:async()=>{try{const y=G().btcWallet;if(!y)throw new Error("Wallet not initialized");const j=G().network==="testnet"?"livenet":"testnet";await y.switchNetwork(j);const{address:$,publicKey:D,balance:g,connected:q,localConnectorId:Q}=y;z((Y)=>({publicKey:D,address:$,balance:g,connected:q,localConnectorId:Q,network:j}))}catch(y){throw console.error("Error checking Wallet",y),y}}})));var m2=({config:{network:z="livenet",defaultConnectorId:G="unisat"}={},theme:y="dark",ui:{connectClass:j="",disconnectClass:$="",modalClass:D="",modalZIndex:g=100}={},text:{connectText:q="Connect",disconnectText:Q="Disconnect",modalTitle:Y="Select Wallet"}={},onConnectSuccess:V,onConnectError:Z,onDisconnectSuccess:S,onDisconnectError:T,children:P})=>{const{connect:_,modalVisible:K,setModalVisible:U,connectors:A,connected:W,address:p,init:B,disconnect:w,initStatus:G2,btcWallet:M,switchConnector:b}=k((X)=>X),d=()=>{U(!0)},r=async(X)=>{b(X);try{if(await _(),M)V?.(M),U(!1)}catch(l){Z?.(l)}},s=async()=>{try{await w(),S?.()}catch(X){console.error(X),T?.(X)}},a=y2(()=>{return A?.map((X)=>({id:X.id,name:X.name,logo:X.logo,installed:X.installed}))||[]},[A]);return m(()=>{B({network:z,defaultConnectorId:G})},[]),m(()=>{B({network:z,defaultConnectorId:G})},[z,G]),J.createElement(J.Fragment,null,!W?J.createElement(J.Fragment,null,J.createElement("button",{onClick:d,className:`bg-clip-text text-transparent border  rounded-xl h-10 px-4 hover:border-yellow-500 ${y==="dark"?"bg-gradient-to-r from-pink-500 to-violet-500 border-gray-600":"bg-gradient-to-r from-blue-500 to-green-500 border-gray-300"} ${j}`},q),J.createElement(u,{theme:y,className:D,zIndex:g,title:Y,onClose:()=>U(!1),visible:K,wallets:a,onClick:r})):P?P:J.createElement("button",{onClick:s,className:`bg-clip-text text-transparent border border-gray-300 rounded-xl h-10 px-4 hover:border-yellow-500 flex justify-center items-center ${y==="dark"?"bg-gradient-to-r from-pink-500 to-violet-500":"bg-gradient-to-r from-blue-500 to-green-500"} ${$}`},J.createElement("span",{className:"mr-1"},I(p,4,"***")),J.createElement(C,{className:`${y==="dark"?"text-white":"text-black"}`})))};export{k as useReactWalletStore,m2 as WalletConnectReact};
