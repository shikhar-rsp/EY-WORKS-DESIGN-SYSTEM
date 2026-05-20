import 'package:flutter/material.dart';

class CarouselDefault extends StatefulWidget {
  const CarouselDefault({super.key});

  @override
  State<CarouselDefault> createState() => _CarouselDefaultState();
}

class _CarouselDefaultState extends State<CarouselDefault> {
  final _controller = PageController();
  int _current = 0;
  final int _total = 5;

  void _prev() {
    if (_current > 0) {
      setState(() => _current--);
      _controller.animateToPage(_current, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  void _next() {
    if (_current < _total - 1) {
      setState(() => _current++);
      _controller.animateToPage(_current, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          SizedBox(
            height: 220,
            child: PageView.builder(
              controller: _controller,
              itemCount: _total,
              onPageChanged: (i) => setState(() => _current = i),
              itemBuilder: (context, i) => Padding(
                padding: const EdgeInsets.only(left: 16),
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAFAFA), // --muted
                    borderRadius: BorderRadius.circular(16), // --radius-large
                    border: Border.all(color: const Color(0xFFEBE9E8)), // --border
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    '${i + 1}',
                    style: const TextStyle(
                      fontSize: 36,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF2E2B2B), // --foreground
                    ),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: -16, top: 0, bottom: 0,
            child: Center(
              child: _current > 0
                  ? _NavButton(onTap: _prev, icon: Icons.chevron_left)
                  : Opacity(opacity: 0.5, child: _NavButton(onTap: null, icon: Icons.chevron_left)),
            ),
          ),
          Positioned(
            right: -16, top: 0, bottom: 0,
            child: Center(
              child: _current < _total - 1
                  ? _NavButton(onTap: _next, icon: Icons.chevron_right)
                  : Opacity(opacity: 0.5, child: _NavButton(onTap: null, icon: Icons.chevron_right)),
            ),
          ),
        ],
      ),
    );
  }
}

class _NavButton extends StatelessWidget {
  const _NavButton({required this.onTap, required this.icon});
  final VoidCallback? onTap;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 32, height: 32,
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: const Color(0xFFEBE9E8)),
          boxShadow: const [BoxShadow(color: Color(0x1A000000), blurRadius: 3)],
        ),
        child: Icon(icon, size: 16, color: const Color(0xFF2E2B2B)),
      ),
    );
  }
}
