module.exports = (function (t) {
	var r = {};
	function e(n) {
		if (r[n]) return r[n].exports;
		var o = (r[n] = { i: n, l: !1, exports: {} });
		return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
	}
	return (
		(e.m = t),
		(e.c = r),
		(e.d = function (t, r, n) {
			e.o(t, r) ||
				Object.defineProperty(t, r, {
					configurable: !1,
					enumerable: !0,
					get: n,
				});
		}),
		(e.r = function (t) {
			Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(e.n = function (t) {
			var r =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return e.d(r, 'a', r), r;
		}),
		(e.o = function (t, r) {
			return Object.prototype.hasOwnProperty.call(t, r);
		}),
		(e.p = ''),
		e((e.s = 17))
	);
})([
	function (t, r) {
		t.exports = require('d3');
	},
	function (t, r, e) {
		'use strict';
		t.exports = { collapse: e(13), wrapText: e(12), helpers: e(11) };
	},
	function (t, r, e) {
		'use strict';
		(function (r) {
			var n =
					Object.assign ||
					function (t) {
						for (var r = 1; r < arguments.length; r++) {
							var e = arguments[r];
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									(t[n] = e[n]);
						}
						return t;
					},
				o = e(0),
				a = e(1),
				i = a.collapse,
				s = (a.wrapText, a.helpers, e(10)),
				l = e(9),
				c = e(8),
				u = e(4),
				d = e(3);
			t.exports = {
				init: function (t) {
					var e = n({}, d, t, { treeData: t.data });
					if (!e.id)
						return void console.error(
							'react-org-chart: missing id for svg root'
						);
					var a = e.id,
						p = e.treeData,
						f = e.lineType,
						h = e.margin,
						y = e.nodeWidth,
						v = e.nodeHeight,
						g = e.nodeSpacing,
						x = e.shouldResize;
					e.lineDepthY = 'angle' == f ? v + 40 : v + 60;
					var m = document.querySelector(a);
					if (!m)
						return void console.error(
							'react-org-chart: svg root DOM node not found (id: ' +
								a +
								')'
						);
					m.innerHTML = '';
					var b = m.offsetWidth,
						C = m.offsetHeight;
					e.tree = o.layout.tree().nodeSize([y + g, v + g]);
					var w = parseInt((p.children.length * y) / 2),
						O = o
							.select(a)
							.append('svg')
							.attr('width', b)
							.attr('height', C),
						k = O.append('g').attr(
							'transform',
							'translate(' +
								parseInt(w + (b - 2 * w) / 2 - h.left / 2) +
								',20)'
						);
					s(O, 'boxShadow'),
						l(O, 'avatarClip', { borderRadius: 40 }),
						(p.x0 = 0),
						(p.y0 = C / 2),
						p.children.forEach(i),
						(e.svg = k),
						(e.svgroot = O),
						(e.render = c);
					var _ = o.behavior
						.zoom()
						.scaleExtent([0.4, 2])
						.duration(50)
						.on('zoom', u(e));
					O.call(_),
						_.translate([
							parseInt(w + (b - 2 * w) / 2 - h.left / 2),
							20,
						]);
					x &&
						r.addEventListener('resize', function t() {
							if (!m)
								return void r.removeEventListener('resize', t);
							O.attr('width', m.offsetWidth).attr(
								'height',
								m.offsetHeight
							);
						});
					c(e), o.select(a).style('height', C + h.top + h.bottom);
				},
			};
		}.call(this, e(14)));
	},
	function (t, r, e) {
		'use strict';
		var n = {
			margin: { top: 20, right: 20, bottom: 20, left: 20 },
			animationDuration: 350,
			nodeWidth: 240,
			nodeHeight: 120,
			nodeSpacing: 12,
			nodePaddingX: 16,
			nodePaddingY: 16,
			nodeBorderRadius: 4,
			avatarWidth: 40,
			lineType: 'angle',
			lineDepthY: 120,
			backgroundColor: '#fff',
			borderColor: '#e6e8e9',
			nameColor: '#222d38',
			titleColor: '#617080',
			reportsColor: '#92A0AD',
			shouldResize: !0,
		};
		t.exports = n;
	},
	function (t, r, e) {
		'use strict';
		var n = e(0);
		t.exports = function (t) {
			var r = t.svg;
			return function () {
				r.attr(
					'transform',
					'translate(' +
						n.event.translate +
						')\n     scale(' +
						n.event.scale.toFixed(1) +
						')'
				);
			};
		};
	},
	function (t, r, e) {
		'use strict';
		t.exports = function (t) {
			var r = t.svg,
				e = t.x,
				n = void 0 === e ? 5 : e,
				o = t.y,
				a = void 0 === o ? 5 : o,
				i = r
					.append('g')
					.attr('stroke', 'none')
					.attr('fill', 'none')
					.style('cursor', 'pointer')
					.append('g')
					.append('g')
					.attr('id', 'icon')
					.attr('fill', '#92a0ad')
					.attr('transform', 'translate(' + n + ', ' + a + ')'),
				s = i
					.append('g')
					.attr('id', 'arrow')
					.attr(
						'transform',
						'translate(7.000000, 7.000000) scale(-1, 1) translate(-7.000000, -7.000000)'
					);
			s
				.append('path')
				.attr(
					'd',
					'M3.41421356,2 L8.70710678,7.29289322 C9.09763107,7.68341751 9.09763107,8.31658249 8.70710678,8.70710678 C8.31658249,9.09763107 7.68341751,9.09763107 7.29289322,8.70710678 L2,3.41421356 L2,7 C2,7.55228475 1.55228475,8 1,8 C0.44771525,8 0,7.55228475 0,7 L0,1.49100518 C0,0.675320548 0.667758414,0 1.49100518,0 L7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 L3.41421356,2 Z'
				),
				s
					.append('path')
					.attr('opacity', 0.7)
					.attr(
						'd',
						'M12,2 L12,12 L2,12 L2,11 C2,10.4477153 1.55228475,10 1,10 C0.44771525,10 0,10.4477153 0,11 L0,12.4953156 C0,13.3242086 0.674596865,14 1.50034732,14 L12.4996527,14 C13.3281027,14 14,13.3234765 14,12.4996527 L14,1.50034732 C14,0.669321781 13.3358906,0 12.4953156,0 L11,0 C10.4477153,0 10,0.44771525 10,1 C10,1.55228475 10.4477153,2 11,2 L12,2 Z'
					),
				i
					.append('rect')
					.attr('id', 'bounds')
					.attr('x', 0)
					.attr('y', 0)
					.attr('width', 24)
					.attr('height', 24)
					.attr('fill', 'transparent');
		};
	},
	function (t, r, e) {
		'use strict';
		var n =
				Object.assign ||
				function (t) {
					for (var r = 1; r < arguments.length; r++) {
						var e = arguments[r];
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) &&
								(t[n] = e[n]);
					}
					return t;
				},
			o = e(0),
			a = e(1).collapse;
		t.exports = function () {
			var t =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {},
				r = (t.treeData, t.loadChildren),
				e = t.render,
				i = t.onPersonClick;
			return function (s) {
				if (i) {
					var l = i(s, o.event);
					if ('boolean' == typeof l && !l) return;
				}
				if (!s.children && !s._children && s.hasChild) {
					if (!r)
						return void console.error(
							'react-org-chart.onClick: loadChildren() not found in config'
						);
					var c = r(s),
						u = (function (t, r) {
							var e = t.tree,
								o = t.render;
							return function (i) {
								var s = n({}, r, { children: i });
								i.forEach(a),
									s.children.forEach(function (t) {
										e.nodes(r)[0]._children ||
											(e.nodes(r)[0]._children = []),
											(t.x = r.x),
											(t.y = r.y),
											(t.x0 = r.x0),
											(t.y0 = r.y0),
											e.nodes(r)[0]._children.push(t);
									}),
									r.children
										? ((t.callerNode = r),
										  (t.callerMode = 0),
										  (r._children = r.children),
										  (r.children = null))
										: ((t.callerNode = null),
										  (t.callerMode = 1),
										  (r.children = r._children),
										  (r._children = null)),
									o(n({}, t, { sourceNode: s }));
							};
						})(t, s);
					return c.then ? c.then(u) : u(c);
				}
				s.children
					? ((t.callerNode = s),
					  (t.callerMode = 0),
					  (s._children = s.children),
					  (s.children = null))
					: ((t.callerNode = s),
					  (t.callerMode = 1),
					  (s.children = s._children),
					  (s._children = null)),
					e(n({}, t, { sourceNode: s }));
			};
		};
	},
	function (t, r, e) {
		'use strict';
		var n = e(0);
		t.exports = function () {
			var t =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {},
				r = t.svg,
				e = t.links,
				o = t.margin,
				a = t.nodeWidth,
				i = t.nodeHeight,
				s = t.borderColor,
				l = t.sourceNode,
				c = t.treeData,
				u = t.lineType,
				d = t.animationDuration,
				p = l || c,
				f = r.selectAll('path.link').data(
					e.filter(function (t) {
						return t.source.id;
					}),
					function (t) {
						return t.target.id;
					}
				),
				h = n.svg.diagonal().projection(function (t) {
					return [t.x + a / 2, t.y + i / 2];
				}),
				y = n.svg
					.line()
					.x(function (t) {
						return t.x;
					})
					.y(function (t) {
						return t.y;
					})
					.interpolate('linear');
			'angle' === u
				? (f
						.enter()
						.insert('path', 'g')
						.attr('class', 'link')
						.attr('fill', 'none')
						.attr('stroke', s)
						.attr('stroke-opacity', 0.5)
						.attr('stroke-width', 1.25)
						.attr('d', function (t) {
							var r = [
								{
									x: t.source.x0 + parseInt(a / 2),
									y: t.source.y0 + i + 2,
								},
								{
									x: t.source.x0 + parseInt(a / 2),
									y: t.source.y0 + i + 2,
								},
								{
									x: t.source.x0 + parseInt(a / 2),
									y: t.source.y0 + i + 2,
								},
								{
									x: t.source.x0 + parseInt(a / 2),
									y: t.source.y0 + i + 2,
								},
							];
							return y(r);
						}),
				  f
						.transition()
						.duration(d)
						.attr('d', function (t) {
							var r = [
								{
									x: t.source.x + parseInt(a / 2),
									y: t.source.y + i,
								},
								{
									x: t.source.x + parseInt(a / 2),
									y: t.target.y - o.top / 2,
								},
								{
									x: t.target.x + parseInt(a / 2),
									y: t.target.y - o.top / 2,
								},
								{
									x: t.target.x + parseInt(a / 2),
									y: t.target.y,
								},
							];
							return y(r);
						}),
				  f
						.exit()
						.transition()
						.duration(d)
						.attr('d', function (r) {
							var e = [
								{
									x: t.callerNode.x + parseInt(a / 2),
									y: t.callerNode.y + i + 2,
								},
								{
									x: t.callerNode.x + parseInt(a / 2),
									y: t.callerNode.y + i + 2,
								},
								{
									x: t.callerNode.x + parseInt(a / 2),
									y: t.callerNode.y + i + 2,
								},
								{
									x: t.callerNode.x + parseInt(a / 2),
									y: t.callerNode.y + i + 2,
								},
							];
							return y(e);
						})
						.each('end', function () {
							t.callerNode = null;
						}))
				: 'curve' === u &&
				  (f
						.enter()
						.insert('path', 'g')
						.attr('class', 'link')
						.attr('stroke', s)
						.attr('fill', 'none')
						.attr('x', a / 2)
						.attr('y', i / 2)
						.attr('d', function (t) {
							var r = { x: p.x0, y: p.y0 };
							return h({ source: r, target: r });
						}),
				  f.transition().duration(d).attr('d', h),
				  f
						.exit()
						.transition()
						.duration(d)
						.attr('d', function (t) {
							var r = { x: p.x, y: p.y };
							return h({ source: r, target: r });
						})
						.remove());
		};
	},
	function (t, r, e) {
		'use strict';
		var n = e(1),
			o = n.wrapText,
			a = n.helpers,
			i = e(7),
			s = e(6),
			l = e(5),
			c = 'org-chart-node',
			u = 'org-chart-person-link',
			d = 'org-chart-person-name',
			p = 'org-chart-person-title',
			f = 'org-chart-person-dept',
			h = 'org-chart-person-reports';
		function y(t) {
			return t.person.department
				? (console.log(t),
				  f + ' ' + t.person.department
						? t.person.department.toLowerCase()
						: '')
				: f;
		}
		t.exports = function (t) {
			t.svgroot;
			var r = t.svg,
				e = t.tree,
				n = t.animationDuration,
				f = t.nodeWidth,
				v = t.nodeHeight,
				g = t.nodePaddingX,
				x = t.nodePaddingY,
				m = t.nodeBorderRadius,
				b = t.backgroundColor,
				C = t.nameColor,
				w = t.titleColor,
				O = t.reportsColor,
				k = t.borderColor,
				_ = t.avatarWidth,
				j = t.lineDepthY,
				P = t.treeData,
				N = t.sourceNode,
				L = t.onPersonLinkClick,
				D = e.nodes(P).reverse(),
				T = e.links(D);
			(t.links = T),
				(t.nodes = D),
				D.forEach(function (t) {
					t.y = t.depth * j;
				});
			var I = r.selectAll('g.' + c).data(
					D.filter(function (t) {
						return t.id;
					}),
					function (t) {
						return t.id;
					}
				),
				M = N || P,
				E = I.enter()
					.insert('g')
					.attr('class', c)
					.attr('transform', 'translate(' + M.x0 + ', ' + M.y0 + ')')
					.on('click', s(t));
			E.append('rect')
				.attr('width', f)
				.attr('height', v)
				.attr('fill', b)
				.attr('stroke', k)
				.attr('rx', m)
				.attr('ry', m)
				.attr('fill-opacity', 0.05)
				.attr('stroke-opacity', 0.025)
				.attr('filter', 'url(#boxShadow)'),
				E.append('rect')
					.attr('width', f)
					.attr('height', v)
					.attr('id', function (t) {
						return t.id;
					})
					.attr('fill', b)
					.attr('stroke', k)
					.attr('rx', m)
					.attr('ry', m)
					.style('cursor', a.getCursorForNode)
					.attr('class', 'box');
			var z = { x: 1.4 * g + _, y: 1.8 * x };
			E.append('text')
				.attr('class', d)
				.attr('x', z.x)
				.attr('y', z.y)
				.attr('dy', '.3em')
				.style('cursor', 'pointer')
				.style('fill', C)
				.style('font-size', 16)
				.text(function (t) {
					return t.person.name;
				}),
				E.append('text')
					.attr('class', p + ' unedited')
					.attr('x', z.x)
					.attr('y', z.y + 1.2 * x)
					.attr('dy', '0.1em')
					.style('font-size', 14)
					.style('cursor', 'pointer')
					.style('fill', w)
					.text(function (t) {
						return t.person.title;
					}),
				E.append('text')
					.attr('class', h)
					.attr('x', z.x)
					.attr('y', z.y + x + 45)
					.attr('dy', '.9em')
					.style('font-size', 14)
					.style('font-weight', 500)
					.style('cursor', 'pointer')
					.style('fill', O)
					.text(a.getTextForTitle),
				E.append('image')
					.attr('width', _)
					.attr('height', _)
					.attr('x', g)
					.attr('y', x)
					.attr('stroke', k)
					.attr('src', function (t) {
						return t.person.avatar;
					})
					.attr('xlink:href', function (t) {
						return t.person.avatar;
					})
					.attr('clip-path', 'url(#avatarClip)'),
				E.append('text')
					.attr('class', y)
					.attr('x', 34)
					.attr('y', _ + 1.2 * x)
					.attr('dy', '.9em')
					.style('cursor', 'pointer')
					.style('fill', w)
					.style('font-weight', 600)
					.style('font-size', 8)
					.attr('text-anchor', 'middle')
					.text(a.getTextForDepartment);
			var R = E.append('a')
				.attr('class', u)
				.attr('xlink:href', function (t) {
					return t.person.link || 'https://lattice.com';
				})
				.on('click', function (t) {
					d3.event.stopPropagation(), L && L(t, d3.event);
				});
			l({ svg: R, x: f - 28, y: v - 28 }),
				I.transition()
					.duration(n)
					.attr('transform', function (t) {
						return 'translate(' + t.x + ',' + t.y + ')';
					})
					.select('rect.box')
					.attr('fill', b)
					.attr('stroke', k),
				I.exit()
					.transition()
					.duration(n)
					.attr('transform', function (t) {
						return 'translate(' + M.x + ',' + M.y + ')';
					})
					.remove(),
				r.selectAll('path.link').data(T, function (t) {
					return t.target.id;
				}),
				r.selectAll('text.unedited.' + p).call(o, 140),
				i(t),
				D.forEach(function (t) {
					(t.x0 = t.x), (t.y0 = t.y);
				});
		};
	},
	function (t, r, e) {
		'use strict';
		var n =
				Object.assign ||
				function (t) {
					for (var r = 1; r < arguments.length; r++) {
						var e = arguments[r];
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) &&
								(t[n] = e[n]);
					}
					return t;
				},
			o = { borderRadius: 4 };
		t.exports = function (t, r) {
			var e =
				arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: {};
			(e = n({}, o, e)),
				t
					.append('svg:defs')
					.append('clipPath')
					.attr('id', r)
					.append('circle')
					.attr('cx', 34)
					.attr('cy', 34)
					.attr('r', 18);
		};
	},
	function (t, r, e) {
		'use strict';
		var n =
				Object.assign ||
				function (t) {
					for (var r = 1; r < arguments.length; r++) {
						var e = arguments[r];
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) &&
								(t[n] = e[n]);
					}
					return t;
				},
			o = { width: '150%', height: '150%', x: 0, y: 2, blurRadius: 1 };
		t.exports = function (t, r) {
			var e =
				arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: {};
			e = n({}, o, e);
			var a = t
				.append('svg:defs')
				.append('svg:filter')
				.attr('id', r)
				.attr('height', '150%')
				.attr('width', '150%');
			a
				.append('svg:feGaussianBlur')
				.attr('in', 'SourceAlpha')
				.attr('stdDeviation', e.blurRadius)
				.attr('result', 'blurOut'),
				a
					.append('svg:feOffset')
					.attr('in', 'blurOut')
					.attr('dx', e.x)
					.attr('dy', e.y)
					.attr('result', 'offsetOut');
			var i = a.append('feMerge');
			i.append('feMergeNode').attr('in', 'offsetOut'),
				i.append('feMergeNode').attr('in', 'SourceGraphic');
		};
	},
	function (t, r, e) {
		'use strict';
		t.exports = {
			getTextForTitle: function (t) {
				if (!t.person || !t.person.totalReports) return '';
				var r = t.person.totalReports;
				return r + ' report' + (r > 1 ? 's' : '');
			},
			getTextForDepartment: function (t) {
				if (!t.person.department) return '';
				var r = t.person.department;
				if (n[r]) return n[r].toUpperCase();
				return t.person.department.substring(0, 3).toUpperCase();
			},
			getCursorForNode: function (t) {
				return t.children || t._children || t.hasChild
					? 'pointer'
					: 'default';
			},
		};
		var n = {
			Marketing: 'mktg',
			Operations: 'ops',
			Growth: 'gwth',
			Branding: 'brand',
			Assurance: 'fin',
			Data: 'data',
			Design: 'design',
			Communications: 'comms',
			Product: 'prod',
		};
	},
	function (t, r, e) {
		'use strict';
		var n = e(0);
		t.exports = function (t, r) {
			if (0 === t.length) return '';
			var e = '';
			t[0].forEach(function (t) {
				for (
					var o = n.select(t),
						a = o.attr('x'),
						i = o.attr('y'),
						s = parseFloat(o.attr('dy')),
						l = o.text().split(/\s+/).reverse(),
						c = 0,
						u = void 0,
						d = [],
						p = o
							.text(null)
							.append('tspan')
							.attr('x', a)
							.attr('y', i)
							.attr('dy', s + 'em');
					(u = l.pop());

				)
					d.push(u),
						p.text(d.join(' ')),
						p.node().getComputedTextLength() > r &&
							(d.pop(),
							p.text(d.join(' ')),
							(d = [u]),
							(p = o
								.append('tspan')
								.attr('x', a)
								.attr('y', i)
								.attr('dy', 1.1 * ++c + s + 'em')
								.text(u)));
				e || (e = o.attr('class').replace(' unedited', '')),
					o.attr('class', e);
			});
		};
	},
	function (t, r, e) {
		'use strict';
		t.exports = function t(r) {
			r.children &&
				((r._children = r.children),
				r._children.forEach(t),
				(r.children = null));
		};
	},
	function (t, r) {
		var e;
		e = (function () {
			return this;
		})();
		try {
			e = e || Function('return this')() || (0, eval)('this');
		} catch (t) {
			'object' == typeof window && (e = window);
		}
		t.exports = e;
	},
	function (t, r) {
		t.exports = require('react');
	},
	function (t, r, e) {
		'use strict';
		var n =
				Object.assign ||
				function (t) {
					for (var r = 1; r < arguments.length; r++) {
						var e = arguments[r];
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) &&
								(t[n] = e[n]);
					}
					return t;
				},
			o = (function () {
				function t(t, r) {
					for (var e = 0; e < r.length; e++) {
						var n = r[e];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n);
					}
				}
				return function (r, e, n) {
					return e && t(r.prototype, e), n && t(r, n), r;
				};
			})();
		var a = e(15),
			i = a.createElement,
			s = a.PureComponent,
			l = e(2).init,
			c = (function (t) {
				function r() {
					return (
						(function (t, r) {
							if (!(t instanceof r))
								throw new TypeError(
									'Cannot call a class as a function'
								);
						})(this, r),
						(function (t, r) {
							if (!t)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return !r ||
								('object' != typeof r && 'function' != typeof r)
								? t
								: r;
						})(
							this,
							(r.__proto__ || Object.getPrototypeOf(r)).apply(
								this,
								arguments
							)
						)
					);
				}
				return (
					(function (t, r) {
						if ('function' != typeof r && null !== r)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof r
							);
						(t.prototype = Object.create(r && r.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							r &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(t, r)
									: (t.__proto__ = r));
					})(r, s),
					o(r, [
						{
							key: 'render',
							value: function () {
								var t = this.props.id;
								return i('div', { id: t });
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								var t = this.props,
									r = t.id,
									e = t.tree,
									o = (function (t, r) {
										var e = {};
										for (var n in t)
											r.indexOf(n) >= 0 ||
												(Object.prototype.hasOwnProperty.call(
													t,
													n
												) &&
													(e[n] = t[n]));
										return e;
									})(t, ['id', 'tree']);
								l(n({ id: '#' + r, data: e }, o));
							},
						},
					]),
					r
				);
			})();
		(c.defaultProps = { id: 'react-org-chart' }), (t.exports = c);
	},
	function (t, r, e) {
		'use strict';
		var n = e(16),
			o = e(2).init;
		(n.init = o), (t.exports = n);
	},
]);
