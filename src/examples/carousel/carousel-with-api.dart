import 'package:flutter/material.dart';

class CarouselWithApi extends StatefulWidget {
  const CarouselWithApi({super.key});

  @override
  State<CarouselWithApi> createState() => _CarouselWithApiState();
}

class _CarouselWithApiState extends State<CarouselWithApi> {
  final _controller = PageController();
  int _current = 0;
  final int _total = 4;

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
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'Slide ${_current + 1} of $_total',
          style: const TextStyle(fontSize: 14, color: Color(0xFF71717A)),
        ),
        const SizedBox(height: 12),
        SizedBox(
          width: 240,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              SizedBox(
                height: 200,
                child: PageView.builder(
                  controller: _controller,
                  itemCount: _total,
                  onPageChanged: (i) => setState(() => _current = i),
                  itemBuilder: (context, i) => Padding(
                    padding: const EdgeInsets.only(left: 16),
                    child: Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAFAFA), // --muted
                        borderRadius: BorderRadius.circular(16),
                      ),
                      alignment: Alignment.center,
                      child: Text(
                        '${i + 1}',
                        style: const TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.w700,
                          color: Color(0xFF2E2B2B),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Positioned(
                left: -16, top: 0, bottom: 0,
                child: Center(child: _NavBtn(onTap: _current > 0 ? _prev : null, icon: Icons.chevron_left)),
              ),
              Positioned(
                right: -16, top: 0, bottom: 0,
                child: Center(child: _NavBtn(onTap: _current < _total - 1 ? _next : null, icon: Icons.chevron_right)),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class _NavBtn extends StatelessWidget {
  const _NavBtn({required this.onTap, required this.icon});
  final VoidCallback? onTap;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Opacity(
        opacity: onTap == null ? 0.5 : 1.0,
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
      ),
    );
  }
}
